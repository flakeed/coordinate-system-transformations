const {
    polarToCartesian,
    sphericalToCartesian,
    distanceCartesian2D,
    distanceCartesian3D,
    distancePolar,
    distanceSpherical,
    greatCircleDistance
} = require('../src/coordinate_conversion');

function generateRandomPolarPoints(n) {
    const points = [];
    for (let i = 0; i < n; i++) {
        const r = Math.random() * 100;
        const theta = Math.random() * 2 * Math.PI;
        points.push({ r, theta });
    }
    return points;
}

function generateRandomSphericalPoints(n) {
    const points = [];
    for (let i = 0; i < n; i++) {
        const r = Math.random() * 100;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.random() * Math.PI;
        points.push({ r, theta, phi });
    }
    return points;
}

function benchmarkDistances(n) {
    console.log('Benchmarking Distances:');

    const polarPoints = generateRandomPolarPoints(n);
    const sphericalPoints = generateRandomSphericalPoints(n);

    // Benchmark Polar Distance
    console.time('Distance in Polar');
    for (let i = 0; i < n - 1; i++) {
        distancePolar(
            polarPoints[i].r, polarPoints[i].theta,
            polarPoints[i + 1].r, polarPoints[i + 1].theta
        );
    }
    console.timeEnd('Distance in Polar');

    // Benchmark Cartesian 2D Distance
    console.time('Distance in Cartesian 2D');
    for (let i = 0; i < n - 1; i++) {
        const p1 = polarToCartesian(polarPoints[i].r, polarPoints[i].theta);
        const p2 = polarToCartesian(polarPoints[i + 1].r, polarPoints[i + 1].theta);
        distanceCartesian2D(p1.x, p1.y, p2.x, p2.y);
    }
    console.timeEnd('Distance in Cartesian 2D');

    // Benchmark Spherical Distance (Volume)
    console.time('Distance in Spherical (Volume)');
    for (let i = 0; i < n - 1; i++) {
        distanceSpherical(
            sphericalPoints[i].r, sphericalPoints[i].theta, sphericalPoints[i].phi,
            sphericalPoints[i + 1].r, sphericalPoints[i + 1].theta, sphericalPoints[i + 1].phi
        );
    }
    console.timeEnd('Distance in Spherical (Volume)');

    // Benchmark Great Circle Distance
    console.time('Great Circle Distance');
    const radius = 6371;
    for (let i = 0; i < n - 1; i++) {
        greatCircleDistance(
            radius,
            sphericalPoints[i].theta, sphericalPoints[i].phi,
            sphericalPoints[i + 1].theta, sphericalPoints[i + 1].phi
        );
    }
    console.timeEnd('Great Circle Distance');

    // Benchmark Cartesian 3D Distance
    console.time('Distance in Cartesian 3D');
    for (let i = 0; i < n - 1; i++) {
        const p1 = sphericalToCartesian(sphericalPoints[i].r, sphericalPoints[i].theta, sphericalPoints[i].phi);
        const p2 = sphericalToCartesian(sphericalPoints[i + 1].r, sphericalPoints[i + 1].theta, sphericalPoints[i + 1].phi);
        distanceCartesian3D(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    }
    console.timeEnd('Distance in Cartesian 3D');
}

const n = 10000;
benchmarkDistances(n);
