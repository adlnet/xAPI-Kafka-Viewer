module.exports = {
    
    /**
     * Root path of the service, so localhost:3000/this-value
     */
    root: "/monitor",

    /**
     * Root path of the service, so localhost:3000/this-value
     */
    websocket: {
        password: "ws-password"
    },

    /** Kafka cluster settings */
    kafka: {
        /** Broker array for the cluster */
        brokers: [
            "localhost:9092"
        ],

        /** Topics we want to monitor */
        topics: [
            {
                "name": "learner-xapi",
                "pretty": "Learner xAPI",
                "bootstrap": "primary"
            },
            {
                "name": "transactional-xapi",
                "pretty": "Transactional xAPI",
                "bootstrap": "success"
            },
            {
                "name": "authoritative-xapi",
                "pretty": "Authoritative xAPI",
                "bootstrap": "danger"
            }
        ],
        /** SASL auth for the Kafka cluster.  Delete if not used. */
        sasl: {
            mechanism: 'plain', 
            username: 'kafka-user', 
            password: 'kafka-password' 
        },

        /** Consumer group to use for our monitor. */
        consumerGroup: "xapi-kafka-monitor",
    },
}