module.exports = {
  apps : [
      {
        name: "archie_server",
	node_args: "-r esm",
        script: "./express.js",
//		exp-backoff-restart-delay: 100,
	max_memory_restart: "4G",
        watch: true,
        env: {
          "NODE_ENV": "development"
        }
      }
  ]
}


