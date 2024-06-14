# Trip Planner technical exercise

This repository is a template to help reduce friction for folks working on a technical exercise.  Candidate instructions are below (but instructions provided by email take precedence).

## Your Instructions

If you received instructions in an email, please follow those.  You may be asked to do a subset of the exercise.  If you are asked to do a subset of the exercise, please do not do other parts in the Suggested Problem Statement section below.

Do not submit your exercise as a pull request against this the `trip-planner-block-exercise-template` repository.  If you would like to use Github pull requests, [create a new repository from the template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) and create a pull request in your repository.

## Suggested Problem Statement

Hi!

As part of your interview process, we would like you to complete a technical exercise.  There are two related parts to the exercise.  We would expect you to spend between 30 and 90 minutes on the exercise.  The two parts and estimated time to complete are:

1. reviewing existing code (15-45 minutes)
2. modifying existing code (15-45 minutes).

This repository contains code for a WordPress block plugin that defines a 'trip planner' block that can be added to a page or post from the block editor.  That plugin and application is the base for both parts of this technical exercise.

### Reviewing Existing Code

Please look over the code.  Consider the WordPress block as one we want to add to our library of blocks which we actively maintain.  Look out for accessibility, maintainability, documentation, and general correctness.  Provide your comments, suggestions, recommendations, and overall evaluation.  The format you use is up to you.  It could be as simple as an email, or something more complex like a PR in a private Github repository shared with our reviewers.

When you do your evaluation, imagine that this is code in a pull request (or similar review request) from a colleague.  Your team will be responsible for maintaining this plugin. Use that to help guide your review.

#### Modifying Existing Code

There is a slight and somewhat annoying bug in the existing code. When you add the block to a page and start the timer, the timer will tick all the way down to zero seconds as expected.  After that, the timer displays negative seconds remaining.  The expectation is to not show negative numbers—they are too easy to glance at and misinterpret as positive numbers.

For the modification portion of this exercise, please provide modified code that corrects this bug.  Again, the format you use is up to you.  It could be modified code attached to an email, code submitted to a private Github repository, a diff that we could apply with `patch`, etc.

Approach this part of the exercise as you normally would approach writing production code.  (By that we mean things like "if you'd normally add comments, do that, but don't if you normally wouldn't", "if you'd normally do some code formatting, that's cool, but don't feel like you have to", and "if you'd normally transpile the entire codebase to Prolog, make the change, and transpile it back, go for it".)  If there are any things you do that might surprise us (e.g., that Prolog thing), it's okay to make note of that when returning your work sample.

#### Bonus:  Adding a Feature

Our evaluation of you will be based primarily on the code review and bugfix.  However, if you finish the base parts of the exercise, have time to spare, and want an extra challenge, try modifying the "Encouragement Area" of the countdown screen.  Right now, it always says "Let's go!".  Our completely fabricated user research indicates that it'd be useful if it said different things.  For example:

- "Let's go!" by default.
- "Almost time to leave!" when 5-10 minutes remain.
- "Time to go!" under 5 minutes.

Again, adding that feature is completely optional.

If you want to make other changes, fixes, or enhancements, you are welcome to do so as well.

#### Final Notes

Please plan to spend in the range of 15-90 minutes on this exercise.  More than an hour is probably too long, unless you're genuinely having fun with it.  Please do not go past 90 minutes.  When you submit your comments, tell us how long you spent on the exercise.

Finally, this application was written specifically as an interview exercise, and is not representative of our typical code.

We look forward to seeing what you have to tell us!
