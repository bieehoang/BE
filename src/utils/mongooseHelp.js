const Util = {
    mongooseToMulti: function (values) {
        return values.map((value) => value.toObject());
    },
    mongooseToOne: function (value) {
        return value ? value.toObject() : value;
    },
};
export default Util;
