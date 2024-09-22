const {
    polarToCartesian,
    cartesianToPolar,
    sphericalToCartesian,
    cartesianToSpherical
} = require('../src/coordinate_conversion');

// Verify 2D conversion: Polar <=> Cartesian
function verify2DConversion(r, theta) {
    const cartesian = polarToCartesian(r, theta);
    const polar = cartesianToPolar(cartesian.x, cartesian.y);
    
    console.log(`Polar: (${r}, ${theta}) => Cartesian: (${cartesian.x}, ${cartesian.y}) => Back to Polar: (${polar.r}, ${polar.theta})`);
}

// Verify 3D conversion: Spherical <=> Cartesian
function verify3DConversion(r, theta, phi) {
    const cartesian = sphericalToCartesian(r, theta, phi);
    const spherical = cartesianToSpherical(cartesian.x, cartesian.y, cartesian.z);
    
    console.log(`Spherical: (${r}, ${theta}, ${phi}) => Cartesian: (${cartesian.x}, ${cartesian.y}, ${cartesian.z}) => Back to Spherical: (${spherical.r}, ${spherical.theta}, ${spherical.phi})`);
}

verify2DConversion(10, Math.PI / 4);
verify2DConversion(15, Math.PI / 6);
verify3DConversion(10, Math.PI / 3, Math.PI / 4);
verify3DConversion(15, Math.PI / 6, Math.PI / 3);
