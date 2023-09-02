
gen-proto:
	protoc -I=./proto ./proto/*.proto \
		--js_out=import_style=commonjs,binary:./viz/src/autogen/ \
		--grpc-web_out=import_style=typescript,mode=grpcweb:./viz/src/autogen/ \
	    --plugin=protoc-gen-grpc-web=./viz/node_modules/.bin/protoc-gen-grpc-web

dev-srv:
	cd srv && cargo run --bin server

dev-viz:
	cd viz && yarn dev
