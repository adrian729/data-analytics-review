# General Plan

## Goal

We want to create a simple page, to gather insights/lessons on data analytics
(following Google Data Analytics course at Coursera).

The first thing is to define just the structure, how the page and content will
be organized and what will we include, NOT specific content at all yet. That
doesn't mean not to have into account the content to decide what the page will
include and how.

It should be concise and clear, so that we can re-visit it later to refresh and
practice our knowledge on the topics.

A summary of all the courses is at
@~/projects/google-data-analytics-certificate/

## Tech Stack

I was thinking about using TanStack (Router, Charts, and maybe some other
libraries. No need for SSR or anything so I want a simple stack), together with
shadcn ui (using Tailwind latest) for most of the UI (we will need to check if
it is worth to use TanStack Charts instead of the ones coming with shadcn, since
we are talking Data Analysis maybe a bit more powerhorse in the charts side is
good to have).

## Content Structure

For each course, I want:

- Course Summary -> we DON'T want to follow exactly the same structure as each
  course module etc. We need to analyze for each course the content, split it in
  separate lessons, and then have for each course the lessons shown. We also may
  want to be wary of repeated content, since it is several separated courses I
  expect some duplication to be in place, we want to try to avoid that. Info
  should be explained before it is needed though, so probably in case of
  duplication we want to keep that info in the earlier stages, be wary also of
  sections that don't only duplicate but expand on a topic, then we need to have
  some more critical thinking, do we want to expand the previous
  explanation/information already? Or is it okey to keep a tiny duplication to
  add the expanded information, since it requires new concepts that we didn't
  know yet earlier?

The real course is verbose, repeats itself, etc. For us what we want is concise,
clear, comprehensive information that goes to the point and only expands with
concrete examples when necessary. No verbosity at all, this is not a person
speaking to an audience, it's knowledge and information to revisit or learn just
the topic.

- Glossary -> Alphabetically ordered glossary of words/concepts in the course

- Practice -> for now I only have in mind flashcarts (probably using the
  glossary for them, but we may expand with some more questions/info if it makes
  sense). We could organize also the flashcards (and glossaries/lessons/etc)
  with tags for the concrete course and lesson, so that later we can automatize
  or filter some of the things.

If there are other exercises/games for practice it would be good to have more
suggestions and ideas to chose what we want to include.

## Data

I want an SPA, probably the content can be included in files with JSON, no need
for any real DB at all. We want to think a bit tho how will we organize our
data, and we want to use TypeScript, so probably would be good to define the
types of data we have.

Just as a first brainstorming of data we need, not refined at all and may need a
lot of re-thinking/refactoring:

- Course: key, title, list of lessons (sorted), .md file path with a course
  introduction (what to expect in the course, TOC linking to each lesson,
  glossary and practice pages)
- Lesson: key, .md file path where the lesson content is, tags (the course,
  maybe other tags, didn't think about it yet)
- Glossary: the glossary should be a JSON, each glossary item will have a key,
  then the object which has the keyword (f.e. "Data Analytics") and the
  description. We want also somehow tags to relate to the course and lessons
  where the keyword is relevant (probably just a list of tags with the keys).
  Maybe "glossary" itself should be one of the tags so we can differentiate with
  other things, maybe just a "glossary" item having inside a list of kvs, we
  need to decide how to design it best.
- practice: need to decide, we could have just the glossary + add some extra
  items, we could use tags, still to be defined. Just need to think how and if
  we need some extra data definitions for practice items, depends on how we
  expand practice, how we decide to structure de glossary data, etc..
