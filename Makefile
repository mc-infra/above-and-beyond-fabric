# dirs := a b c d
# files := $(foreach dir,$(dirs),$(wildcard $(dir)/*))
M ?= update pack

refresh:
	packwiz refresh

publish:
	git add --all
	git commit -m "$(M)"
	git push

all: refresh publish

.PHONY:	refresh	publish all
.DEFAULT:	all
