---
title: On asking the right question
date: 2026-09-25
description: The team was choosing between three code review tools. The better move was asking what review is actually for.
draft: false
---

Our team is three developers, and every one of us works with coding agents all day. On a heavy
day each of us opens eight to ten pull requests. That is more code than three people can read
carefully, and everyone knew it.

So the conversation turned, the way these conversations do, into a shopping trip. Greptile,
CodeRabbit, or SonarQube? Which AI reviewer should read the code the AI wrote?

I sat in it for a few minutes before it bothered me. We already had AI review on every PR. We
were about to add another one. The question was "which tool," and nobody had asked what problem
the tool was supposed to solve.

## What review is for

When you take code review apart, it does three jobs.

**It catches defects.** Someone spots the off-by-one, the missing null check, the query that
scans the whole table.

**It spreads knowledge.** The reviewer learns what changed in a part of the system they don't
own. Six months later, that's the reason two people can fix it instead of one.

**It's a human vouching for the change.** Someone other than the author looked at it and is
willing to say it's fine. That one matters most when something breaks and somebody asks who
signed off.

An AI reviewer does the first job, and does it well. It can't do the second, because the point is
that a *person* learns something. And it can't do the third, because an AI vouching for code
another AI wrote isn't a second opinion. It's the same opinion twice.

So a fourth tool would get us more of the one job we were already covering. The two jobs we were
actually losing would get nothing.

## The real problem

Once I said it out loud, the real problem was easy to see. We didn't have a reviewer shortage.
We had an *attention* shortage. Thirty PRs a day, every one asking for the same careful read,
and three humans who couldn't give it.

When everything asks for full attention, nothing gets it. People skim. Skimming feels like
reviewing, and it does none of the three jobs.

## The answer was a label

What we did instead: every PR gets a risk label. `risk:low`, `risk:med`, or `risk:high`. The agent
that opens the PR applies it, following a short written list of what pushes a change up a level:
money, client data, migrations, anything touching production config.

High-risk PRs get a real human read, slowly. Medium gets a normal review. Low gets merged without
guilt. That last part is the important one.

The first labelling pass put 32 of 35 PRs at medium or high. That defeats the point, because a
label that's almost always "high" is just noise. The rule we settled on is to start at low and
only raise it when something on the list actually applies. Low should come up often. Deleting
dead code is low. A copy change is low. Most PRs, honestly, are low.

My teammate agreed the same day. We bought nothing.

## The pattern

The thing I keep coming back to is how the problem showed up already framed. "Which tool?"
assumes a tool is the answer. Then the only remaining work is comparing feature lists, which feels
productive and is mostly a way of not thinking.

The question underneath is almost always "what is this for?" Ask that first. Sometimes the answer
really is a tool. This time it was a word on a pull request.

There's a bigger tension underneath all of this that I don't think anyone has solved. The same
agents that let three people ship like ten also pull those three people further from their own
code. More output and less involvement is a bad trade, even when it looks great on a chart. I
want both: more throughput *and* people more involved in each other's work. Risk labels are one
small move in that direction. Human attention goes where it counts, and people actually read the
PRs that matter.
