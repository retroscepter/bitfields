.PHONY: docs

install:
	npm ci

docs:
	npx typedoc

test:
	npx jest

test-coverage:
	npx jest --coverage

dev:
	npx tsc -w -p tsconfig.json

build:
	npx tsc -p tsconfig.json

bundle:
	npx webpack