# Nine to Five, No Weekend

[![make.fun · u-clever-harbor-75-one-star-for-monday-9ead4a61](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/Yetu89/one-star-monday-01/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/Yetu89/one-star-monday-01/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-one-star-for-monday-9ead4a61)

Entry for the [make.fun](https://make.fun) bounty **One Star for Monday**
([bounty page](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)): a one-star
review of Monday written as if Monday were a restaurant, 25 words or fewer.
Free entry.

## The line

> One star. The waiter took my order at 9 a.m. and brought the bill at 5 p.m. — still no weekend on the menu.

(107 characters, 24 words, one line, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-star-monday-out node main.ts
```

The program validates the text is 1–180 characters (counted in code points),
at most 25 words, a single line, and not only whitespace before writing it.

## License

MIT — see [LICENSE](LICENSE).
