Package.describe({
    summary: "Repackage of @chriso's node-validator for Meteor. ref: https://github.com/chriso/node-validator"
});

Package.on_use(function (api, where) {
        api.use('exponential-app', ['client', 'server']);
        api.add_files(['lib/validator.js'], ['client', 'server']);
});
