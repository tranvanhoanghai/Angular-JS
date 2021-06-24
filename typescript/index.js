var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Greee"] = 1] = "Greee";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var co = Color.Blue;
console.log(co);
