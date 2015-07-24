var config = {
    test: {
        mode: 'test',
        port: 3000,
        mongoUrl: 'mongodb://localhost/moment',
        mandrill: '_KuVNV5_5BqI2zlVhZug9w',
        twilio: {
            'sid': 'AC766ecee3bb5c4a9a70ad4d11196fc0b7',
            'token': '70eba6913572625a3494903ed65d0cf6'
        },
        stripe: 'sk_test_4KOA0jEfkA2rkzEcFZGgh1CC',
        plaid: {
            client_id: '54affc81a4ca3fba68b2b78b',
            secret: '095052bd1a6d1211d208dc5d684e16',
        },
        superUser: [
            1
        ],
        authUrl: 'moment-dev://',
        surpriseUrl: 'https://discovermoment.com/surprises',
        sns: {
            region: 'us-east-1',
            accessKey: 'AKIAJZ5RUSSIKHBMYMDQ',
            secret: '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',
            arn: 'arn:aws:sns:us-east-1:694569749553:app/APNS_SANDBOX/MomentAdHoc',
            sandbox: true
        },
        postmates: {
            customerId: 'cus_KI-5FO06rO2ZLk',
            key: '6999792e-b488-4f14-b803-b56372740d90'
        },
        amqp: {
            url: 'amqp://chjynynw:ZIxv8g7cgpBbFGD_fvZsLDiGZBBJqMM3@owl.rmq.cloudamqp.com/chjynynw',
            scheduledMomentQueueName: "scheduledMoments"
        },
    },
    local: {
        mode: 'local',
        port: 8080,
        mongoUrl: 'mongodb://localhost/moment',
        mandrill: '_KuVNV5_5BqI2zlVhZug9w',
        twilio: {
            'sid': 'AC766ecee3bb5c4a9a70ad4d11196fc0b7',
            'token': '70eba6913572625a3494903ed65d0cf6',
            'fromPhoneNumber': '+19078918985'
        },
        stripe: 'sk_test_4KOA0jEfkA2rkzEcFZGgh1CC',
        plaid: {
            client_id: '54affc81a4ca3fba68b2b78b',
            secret: '095052bd1a6d1211d208dc5d684e16'
        },
        superUser: [
            1, 6785498828
        ],
        authUrl: 'moment-dev://',
        surpriseUrl: 'https://discovermoment.com/surprises',
        sns: {
            region: 'us-east-1',
            accessKey: 'AKIAJZ5RUSSIKHBMYMDQ',
            secret: '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',
            arn: 'arn:aws:sns:us-east-1:694569749553:app/APNS_SANDBOX/MomentAdHoc',
            sandbox: true
        },
        postmates: {
            customerId: 'cus_KI-5FO06rO2ZLk',
            key: '6999792e-b488-4f14-b803-b56372740d90'
        },
        amqp: {
            url: 'amqp://rtpbdvok:5hk00-SMxmk3s1nzXdXaOasL1reU3BXj@owl.rmq.cloudamqp.com/rtpbdvok',
            scheduledMomentQueueName: "scheduledMoments"
        },
        newrelic: {
            key: '5a829b7446998ac1e456f551dc45cda75dad0c3b',
            name: 'Moment Core API Local'
        }
    },
    staging: {
        mode: 'staging',
        port: process.env.PORT || 8080,
        mandrill: '_KuVNV5_5BqI2zlVhZug9w',
        mongoUrl: process.env.MONGOLAB_URI || 'mongodb://heroku_n9j5w323:148a7e6vuqesrpgi75jnj3vsaf@ds047742.mongolab.com:47742/heroku_n9j5w323',
        twilio: {
            'sid': 'AC766ecee3bb5c4a9a70ad4d11196fc0b7',
            'token': '70eba6913572625a3494903ed65d0cf6',
            'fromPhoneNumber': '+19078918985'
        },
        logentries: 'a462fb73-984c-4779-bd6c-8559e7a9dbbc',
        stripe: 'sk_test_4KOA0jEfkA2rkzEcFZGgh1CC',
        plaid: {
            client_id: '54affc81a4ca3fba68b2b78b',
            secret: '095052bd1a6d1211d208dc5d684e16',
            host: 'api.plaid.com'
        },
        superUser: [
            1
        ],
        authUrl: 'moment-dev://',
        surpriseUrl: 'https://discovermoment.com/surprises',
        sns: {
            region: 'us-west-2',
            accessKey: 'AKIAIWAT7Y3NAG3QBOOA',
            secret: '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',
            arn: 'arn:aws:sns:us-west-2:773088648801:app/APNS/MomentEnt_Production',
            sandbox: false
        },
        postmates: {
            customerId: 'cus_KI-5FO06rO2ZLk',
            key: '6999792e-b488-4f14-b803-b56372740d90' //dev
        },
        amqp: {
            url: process.env.CLOUDAMQP_URL,
            scheduledMomentQueueName: "scheduledMoments"
        },
        slack: {
            delivery: {
                webHookUrl: 'https://hooks.slack.com/services/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',
                channel: '#staging-deliveries'
            }
        },
        logging: {
            level: process.env.LOGGING_LEVEL || "DEBUG"
        },
        newrelic: {
            key: '5a829b7446998ac1e456f551dc45cda75dad0c3b',
            name: 'Moment Core API Staging'
        }
    },
    production: {
        mode: 'production',
        port: process.env.PORT || 8080,
        mandrill: '_KuVNV5_5BqI2zlVhZug9w',
        mongoUrl: process.env.MONGOLAB_URI || 'mongodb://heroku_app35351631:mq937h4be4jmv954bts9v9l4at@ds059898.mongolab.com:59898/heroku_app35351631',
        twilio: {
            'sid': 'AC766ecee3bb5c4a9a70ad4d11196fc0b7',
            'token': '70eba6913572625a3494903ed65d0cf6',
            'fromPhoneNumber': '+19078918985'
        },
        logentries: 'a462fb73-984c-4779-bd6c-8559e7a9dbbc',
        stripe: 'sk_live_4KOAlSaIHHWbiYvxFT9SbqRB',
        plaid: {
            client_id: '54affc81a4ca3fba68b2b78b',
            secret: '095052bd1a6d1211d208dc5d684e16',
            host: 'api.plaid.com'
        },
        superUser: [
            1
        ],
        authUrl: 'moment://',
        surpriseUrl: 'https://discovermoment.com/surprises',
        sns: {
            region: 'us-west-2',
            accessKey: 'AKIAIWAT7Y3NAG3QBOOA',
            secret: '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',
            arn: 'arn:aws:sns:us-west-2:773088648801:app/APNS/MomentEnt_Production',
            sandbox: false
        },
        postmates: {
            customerId: 'cus_KI-5FO06rO2ZLk',
            key: '8f869d18-59ca-4d58-ae5a-9ee6ef54658f'
        },
        amqp: {
            url: process.env.CLOUDAMQP_URL,
            scheduledMomentQueueName: "scheduledMoments"
        },
        slack: {
            delivery: {
                webHookUrl: 'https://hooks.slack.com/services/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',
                channel: '#prod-deliveries'
            }
        },
        logging: {
            level: process.env.LOGGING_LEVEL || "ERROR"
        },
        newrelic: {
            key: '5a829b7446998ac1e456f551dc45cda75dad0c3b',
            name: 'Moment Core API'
        }
    }
};
module.exports = function (mode) {
    return config[mode || process.argv[2] || process.env.MODE || 'local'] || config.local;
};
