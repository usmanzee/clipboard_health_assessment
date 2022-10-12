# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Tickts

1. Create new column `agent_cus_id` in Agents tables and add _non-null_ and _unique_ constraint on it in order to avoid the duplications and null value. -> (Time Estimates: 15 Min)
2. Define that column as prop against Agents table Model(ORM Model) (Time Estimates: 10 Min) .
3. Add the ability for Facility to add the custom agent id from frontend (Time Estimates: 30 Min) .
4. Work on the backend to validate and save that custom agent id against agent (Time Estimates: 15 Min) .
5. When `getShiftsByFacility` is called include that `agent_cus_id` in Agent mata-data (Time Estimates: 10 Min) .
6. While calling this `generateReport` method to generate report use `agent_cus_id` to instead of database ID to print the agent information. (Time Estimates: 15 Min)
