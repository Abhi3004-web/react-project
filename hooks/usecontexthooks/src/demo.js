db.createCollection("Students", {
    validator: {
        $jsonSchema: {
            required: ['name', 'age', 'gender', 'class', 'subjects'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'records in string and required'
                },
                age: {
                    bsonType: 'number',
                    minimum: 1,
                    description: 'it should be in number and required'
                },
                gender: {
                    bsonType: 'string',
                    enum: ['male', 'female', 'other'],
                    description: 'string and required'
                },
                class: {
                    bsonType: "string",
                    description: "Class must be a string"
                },
                subjects: {
                    bsonType: 'array',
                    description: 'array of the list and list contain subjects',
                    items: {
                        bsonType: 'object',
                        required: ['name', 'total', 'isrequired'],
                        properties: {
                            name: {
                                bsonType: 'array',
                                items: {
                                    enum: ['Math', 'Hindi', 'Science', 'Social Science', 'English', 'Sanskrit'],
                                    description: 'array data must be matched and required'
                                }
                            },
                            total: {
                                bsonType: 'number',
                                minimum:1,
                                maximum:6,
                                description: 'number greater than 0 and less than 7',
                            },
                            isrequired: {
                                bsonType: 'bool',
                                description: 'either true or false'
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction: 'error'
})
/////////////////////////////////////////////////////////////////////

db.runCommand({
    collMod: 'Students',
    validator: {
        $jsonSchema: {
            required: ['name', 'age', 'sex', 'city'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'must be string and required'
                },
                age: {
                    bsonType: 'number',
                    description: "must be number and required"
                },
                sex: {
                    bsonType: 'string',
                    description: 'must be string and required'
                },
                city: {
                    bsonType: 'string',
                    description: 'must be string and required'
                }
            }
        }
    },
})
////////////////////////////////////////////////////////



