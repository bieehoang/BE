const Util = {
    mongooToMulti: function (values) {
        return (values = values.map((value) => value.toObject()));
    },
    mongooToOne: function (value) {
        return value ? value.toObject() : value;
    },
};
export default Util;
