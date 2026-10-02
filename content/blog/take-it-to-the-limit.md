---
title: Take it to the limit
date: 2026-09-30
description: A trick from calculus that I've started using on every design problem. Push the main variable to the extreme and see what's still standing.
draft: false
---

There's a puzzle I like. Two gears are meshed together, one with ten teeth and one with twelve.
Which one spins faster?

You can work it out with ratios. Or you can ask a stranger question: what if the big gear had a
million teeth? At a million teeth, the edge of that gear is basically a straight line. Now it's a
rack and pinion, a flat toothed bar and a small gear rolling along it. And the answer is obvious
without any math: the small gear spins, the "big gear" barely moves.

That picture was true at twelve teeth too. Going to the extreme didn't change the answer. It
removed everything that was hiding it.

I've started using this move on almost everything, and it has changed how I design things.

## Why it works

At normal settings, everything trades off against everything. Ten teeth versus twelve. A
tolerance of 8% versus 9%. A workflow with a hundred rules versus ninety. Every argument at that
level is about small effects, and small effects are where people can argue forever.

Push the main variable to its extreme and the small effects drop out. What's left is the shape of
the thing. In math, that's the leading term. In practice, it's the part you can't argue with.

Physics has a beautiful name for the end state of this. A black hole is fully described by three
numbers: mass, charge, and spin. Everything else the star ever was has radiated away. Physicists
call it the "no hair" theorem.

I used it twice in one day. The first was the agent workflow I wrote about in
[three piles](/blog/verification-engineering). A hundred rules, pushed to the limit of a perfect
model, came down to three things: a goal, a check that proves the goal was met, and the boundaries
it can't cross. The hundred rules were hair.

The second was a billing check. It had grown a long list of special cases and error codes. Pushed
to the limit, a bill is correct if two things are true: it adds up, and it matches the contract.
Everything else was hair.

## Push both ways

The strongest version of the trick is to go to *both* extremes.

Take the billing check at full automation: software reading every bill with no human involved.
What does it need to check? Does it add up, and does it match the contract.

Now take it at zero automation: a clerk at a desk with a bill in one hand and the contract in the
other. What are they checking? Does it add up, and does it match.

Same two questions at both ends. When both extremes show the same skeleton, that skeleton is the
**invariant**: the thing that doesn't change when everything else does. Everything in between is
implementation detail.

In math, the invariant is the whole game. It's what proofs are built on, and you can work out the
details from it instead of having to remember them. Most of the rules in a system are functions of
their circumstances, like what a model got wrong last month or what the software could read at the
time. The invariant is the one sentence still true after all of that has changed.

## Where it lies

This only works when the variable moves in one direction. More automation has to keep giving you
more of the good thing. If there's a sweet spot in the middle, the extreme will lie to you about
where to stand.

So the limit tells you the *shape* of the solution, never the exact place to build it. Fully
automating every bill is the extreme. The right setting is somewhere short of it, with a person
looking at the lines the software isn't sure about. The extreme shows you what the machine is.
You still choose where on the line to stop, and you should say out loud that you're choosing.

## Why it moves rooms

Most roadmaps are built forward from where you are, one step at a time, and every step gets
argued in the middle. A roadmap built from the limit works backward, with one question for every
item: does this survive the end state? That has a yes-or-no answer. Nine items sorted themselves
in about a minute.

It also works on people. They argue endlessly about the middle. Almost nobody argues with the
limit once it's stated clearly, because there's nothing left to argue with. "A bill is correct if
it adds up and matches the contract" isn't really a position. It's a description.

## What I carry forward

Before the steps, run the move:

- What's the main variable?
- Does it only go one way?
- What does the problem look like at zero, and at infinity?
- What survives both ends?

That survivor is the invariant. Then, and only then, the steps.

One last thing. When you find yourself adding a rule, ask which invariant it's standing in for.
Rules are scaffolding for a system that hasn't found its invariant yet.
