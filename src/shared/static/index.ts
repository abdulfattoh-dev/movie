export const generatePeriods = (startYear: number, step = 10) => {
    const currentYear = new Date().getFullYear();
    const endYear = Math.ceil(currentYear / step) * step;

    const periods = [{
        value: 0,
        gte: `01-01-${startYear - 10}`,
        lte: `01-01-${endYear}`,
        label: 'All'
    }];

    let value = 1;

    for (let year = endYear; year >= startYear; year -= step) {
        const gte = `01-01-${year - step}`;
        const lte = `01-01-${year}`;

        periods.push({
            value: value++,
            gte,
            lte,
            label: `${year - step}s`,
        });
    }

    return periods;
};

export const PERIOD = generatePeriods(1880, 10);
console.log(PERIOD);
