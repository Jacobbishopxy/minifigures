
dev-srv:
	cd srv && cargo run --bin server

init-viz:
	cd viz && yarn

dev-viz:
	cd viz && yarn dev

init-dev-viz:
	cd viz && yarn && yarn dev
