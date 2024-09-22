// Conversion from Polar to Cartesian 2d
function polarToCartesian(r, theta) {
    return {
        x: r * Math.cos(theta),
        y: r * Math.sin(theta)
    };
}

// Conversion from Cartesian to Polar 2d
function cartesianToPolar(x, y) {
    return {
        r: Math.sqrt(x * x + y * y),
        theta: Math.atan2(y, x)
    };
}

// Conversion from Spherical to Cartesian 3d
function sphericalToCartesian(r, theta, phi) {
    return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi)
    };
}

// Conversion from Cartesian to Spherical 3d
function cartesianToSpherical(x, y, z) {
    return {
        r: Math.sqrt(x * x + y * y + z * z),
        theta: Math.atan2(y, x),
        phi: Math.acos(z / Math.sqrt(x * x + y * y + z * z))
    };
}

// Distance in Cartesian system 2d
function distanceCartesian2D(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Distance in Cartesian system 3d
function distanceCartesian3D(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
}

// Distance in Polar system 2d
function distancePolar(r1, theta1, r2, theta2) {
    return Math.sqrt(r1 ** 2 + r2 ** 2 - 2 * r1 * r2 * Math.cos(theta2 - theta1));
}

// Distance in Spherical system 3d - Volume
function distanceSpherical(r1, theta1, phi1, r2, theta2, phi2) {
    return Math.sqrt(
        r1 ** 2 + r2 ** 2 -
        2 * r1 * r2 * (Math.sin(phi1) * Math.sin(phi2) * Math.cos(theta1 - theta2) + Math.cos(phi1) * Math.cos(phi2))
    );
}

// Great Circle distance on a sphere (Spherical system)
function greatCircleDistance(radius, theta1, phi1, theta2, phi2) {
    return radius * Math.acos(
        Math.sin(phi1) * Math.sin(phi2) + Math.cos(phi1) * Math.cos(phi2) * Math.cos(theta1 - theta2)
    );
}

module.exports = {
    polarToCartesian,
    cartesianToPolar,
    sphericalToCartesian,
    cartesianToSpherical,
    distanceCartesian2D,
    distanceCartesian3D,
    distancePolar,
    distanceSpherical,
    greatCircleDistance
};
