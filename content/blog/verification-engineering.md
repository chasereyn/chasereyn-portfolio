---
title: Verification Engineering
date: 2026-09-28
description: Patches, facts, and boundaries. Only one of the three kinds of agent rules expires as models improve.
draft: false
---

Anthropic published a piece this summer called "The New Rules of Context Engineering for
Claude 5 Generation Models." The headline number is that they removed over 80% of Claude
Code's own system prompt and saw no loss on their coding evals. The argument underneath is
that most of what we write for agents was scaffolding for a weaker model, and the scaffolding
stayed up after the building could stand on its own.

I read it at my desk on a Monday afternoon and had two reactions in quick succession. The
first was "yes, obviously." The second was "wait, that can't be the whole story," because
some of the rules I have written for my agents exist for reasons that have nothing to do with
how smart the model is. So I went and tested it on the biggest rulebook I own.

## The rulebook

My main workflow is a skill I call `/solve`. It takes a ticket from research through a plan,
a git worktree, a running copy of the app on its own ports and its own database, an
adversarial review by a second agent, a draft pull request, my own review of the live app, and
teardown. It had grown to 1,306 lines and 68 KB. It used the words *never*, *always*, *must*,
and *do not* one hundred times. Every one of those hundred was a scar from a session where an
agent had done the wrong thing.

The article's implicit claim is that those hundred lines are mostly dead weight now. I wanted
to know which ones.

## Three piles, not one

When I actually went through it, every rule fell into one of three kinds, and they behave
completely differently as models improve.

**Patches.** Rules that exist because a model once guessed. "Read the file before you edit
it." "Verify a tooling limitation before repeating it." "A gate you ran before your last edit
is stale." These are exactly what the article is talking about. They were true fixes for a
real failure, and the failure has mostly stopped happening. They expire, and they should be
re-tested and deleted every model generation.

**Facts the model cannot know.** Which ports are already taken on my machine. That the
analytics server is read-only. That the default billing interval is 32 days and not 35. That
a certain file in the frontend points at the wrong API port when served from a worktree. No
amount of intelligence derives these. They never expire, and they are cheap: one line each.

**Boundaries.** The agent never marks a pull request ready; that click is mine, because
draft-versus-ready is how my teammates know whether I have vetted it. No agent attribution
in a commit. One PR per ticket. Never touch my working clone. These are not about capability
at all. They are about accountability and about how the work reads under my name. And here
is the part the article misses: they get *more* important as models get stronger, not less.
A more capable agent that crosses a line crosses it faster and more convincingly.

The article's advice is correct for the first pile and wrong for the other two. "Cut 80%"
only makes sense once you know which pile a line is in.

## What the sort found

I had a fresh agent read the whole skill and classify each rule. The results were humbling.

About forty items were patches. About twenty were the same rule stated a second or third
time in a different section, because each time an agent broke it I had added a reminder
somewhere new instead of finding the one I already had. The "hard rules" section at the
bottom, sixteen numbered items I had been proud of, turned out to be a summary of the phases
above it: thirteen of the sixteen added no information. And the file contradicted itself once,
assigning the same cleanup command to two different owners in two different sections, which
means every agent that read it had been quietly picking one.

The same pass over my saved memories told a different story. Of forty-six, only seven were
patches. The rest were facts and boundaries, and the only waste was narrative: the incident
story wrapped around each rule, written for a human reader who would never read it.

## What the survivors turned into

This is the part I did not expect. Once the patches and duplicates were gone, the rules that
remained wanted to be something other than prose.

"The PR body should be about 250 words and never more than 300" became `wc -w`. "Confirm no
placeholder URL survives in a paired PR" became a grep that must return nothing. "Check that
the API actually applied your change before you trust the test" became a match on the one
log line that says it did. The rule about attribution, which I had written into three
separate phases because it kept being broken, became a hook that refuses the commit or the
push outright. A rule in a skill is a request. A hook is a wall. Once the wall exists, the
three paragraphs asking nicely can go.

And one new thing went in: every plan now has to name its proof of done before it names its
steps. The test that fails today and passes when the work is right. The query that returns
the wrong rows now and zero rows after. If the honest answer is "I'll look at the screen,"
the plan has to say so, because that is a weaker plan and I want to know.

The skill went from 68 KB to 34 KB. The absolute-words count went from 100 to 31. Nothing
that mattered was lost. I checked: every port number, every path, every command, every quote
from a teammate that was itself the rule.

## Where this goes

Follow the article's trend line to the end and instructions disappear entirely. What is
left is three things: a goal, which says what done means; a verifier, which proves it
mechanically; and boundaries, which say what the agent may not touch. Anthropic's `/goal`
command is already this in its rawest form. You state the end condition, a small model checks
it after every turn, and there is no procedure at all.

A teammate of mine did exactly this on a database migration last weekend. The goal was "the
query equivalence suite passes." The agent found its own route. My data-fix flow has the same
shape without my having named it: a report query, a fix query, an undo query, and the
reporter's own example proven fixed. None of that is a procedure. It is a verifier with a
boundary around it.

I think context engineering is becoming verification engineering. The leverage stops being
"how well can I instruct an agent" and becomes "how precisely can I define correct." That is a
smaller job than writing workflow documents, and a sharper one, and it is the part that does
not shrink as the models improve. The people who can write a good verifier and a good boundary
are the people who decide what agents get to do. That is a job nobody at most companies has
yet.

## If you want to try it

Take your longest agent rulebook. Have a fresh agent classify every rule as patch, fact, or
boundary, and flag every duplicate and every contradiction. Delete the patches you can no
longer reproduce. Collapse the duplicates. Turn every surviving rule that can be a command into
a command, and every rule that can be a hook into a hook. Then add one line to your planning
template: *what is the proof of done?*

Mine took an afternoon. The cut was 50%. The interesting number is not the size, though. It
is that the half that survived can now be checked by a machine, which means the next time a
model gets smarter I do not have to trust it more. I just have to run the checks.
