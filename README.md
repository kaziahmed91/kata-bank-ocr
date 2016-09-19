# kata-bank-ocr

Some Javascript towards solving the Coding Dojo, Kata Bank OCR problem.

## Development Notes

Some quick design notes.

#### User Story 1: generate account number from input

* Create a method to take the 27 x 3 grid and parses it into separate string keys, one per character.
* Create a simple object to map these string keys to the appropriate integers.
* Create a method that loops over the array of string keys and uses the map to naively convert them to an array of integers.
* The conversion should use a "?" character if there is no valid integer found.
* Thinking ahead, this should be a class with data properties for
	* raw input record
	* an array with an array of "string keys" pulled from the raw input record (with one entry for now)
	* an array of "possibleAccountNumber" records (with one entry for now), with properties for:
		* account number
		* illegible character count

#### User Story 2: calculate checksum

* Write a method that does the math to calculate the checksum.
* Add to the possibleAccountNumber record a boolean to store success/fail of checksum

#### User Story 3: report for the boss

* Add a "JSON export" method to the class created for User Story #1.
* Write second module that accepts a set of JSON exported records and generates the report.

#### User Story 4: handle errors and failed checksums

Heh, OK, this is where things get a little algorithmic and we will get some value out of having each input record store an array of possible account numbers.

Going to flip to pseudo-code syntax here, and only focus on one record. Whatever we write for this will need to be able to loop over a set of records and repeat the process for each.

This logic will be initiated for any record that does not have one and only one possible account number that passes the checksum. We will assume that checksum will always be false if the incoming record was illegible.

Going to express this in terms of loops instead of recursion and consider refactoring to use recursion later if it makes sense.

The requirements say "add or remove one pipe or underscore," I would read that as 3 possible mutations of the incoming data for each character in each string key. The instructions are a little unclear to whether we should do this once for each character key, or once for each record, but the text cases (for example the 999999999 AMB case) make it clear that this should only be done one per record.

This does make things simpler, but seems to mean that any record with more than one "?" will not ever be fixed. So, for a first attempt, we'll only attempt to fix records with one illegible character.

To make this even more complex, once there are multiple legible mutated string keys, we should be calculating the checksum for each possible variation of the entire account number.

#### First Phase: Find legible mutations from any records that have invalid checksums.

##### Record preconditions:

* If the raw record has more than one illegible character, skip it for now.
* If the raw record has only one illegible character, only apply the mutation method to that one character.
* If the raw record is entirely legible, but does NOT pass the checksum we will need to apply this process to all characters.

##### Mutation Process:

Based on the preconditions above, this will either be applied to one character (the one illegible) or all characters in the raw record.

* For each string key that needs mutation (either one or all depending on preconditions)
	* for each character in the key, if it is a space
		* replace that space with an underscore
		* check if the mutated string key is legible as an integer
			* if it is legible, add an entry to possibleAccountNumbers
	* for each character in the key, if it is a space
		* replace that space with a pipe
		* check if the mutated string key is legible as an integer
			* if it is legible, add an entry to possibleAccountNumbers
	* for each character in the key, if it is not a space
		* replace that character (underscore or pipe) with a space
		* check if the mutated string key is legible as an integer
			* if it is legible, add an entry to possibleAccountNumbers

#### Second Phase: Update the report

* Add logic to the "report for the boss" that displays AMB if there are more than one possible account numbers with valid checksums.

## Setup

* Clone the repo
* Install or otherwise make available Node 5.11.0 (others will probably work, I use nodenv to avoid system installs)
* cd into the project
* run `npm install`

## Testing and Development

* `npm test` will run the jasmine specs
* `npm run build` will build to the lib folder
* `npm run repl` will get you into the groovy babel-node REPL, with the ES6 polyfill in scope.

Thanks to the babel test helper, jasmine is automatically transpiling the source code. However, in this simplest format, the source code can only be run through a babel transpiler, so you can't debug using the node cli directly. Since this is a library, I am NOT using babel-register to hook into require nor requiring the polyfill, so TDD is your most convenient way to work or play.

