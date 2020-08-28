function voyageRisk(voyage) {
    let result = Math.max(calculateVoyageRisk(voyage), 0);
    return result;
}

function calculateVoyageRisk(voyage) {
    let result = calculateRiskWithVoyageLength(voyage);
    result += calculateRiskWithVoyageZone(voyage, result);
    return result;
}

function calculateRiskWithVoyageZone(voyage, result) {
    if ([
        'china',
        'east-indies',
    ].includes(voyage.zone)) {
        return 4;
    }
    return 0;
}

function calculateRiskWithVoyageLength(voyage) {
    let result = 1
    if (voyage.length > 4) {
        result += 2;
    }
    if (voyage.length > 8) {
        result += voyage.length - 8;
    }
    return result;
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = Math.max(calculateRiskWithCaptainHistory(history, voyage), 0);
    return result;
}

function calculateRiskWithCaptainHistory(history, voyage) {
    let result = calculateRiskWithHistoryLength(history);
    result += calculateRiskWithHistoryProfit(history);
    result += calculateRiskWithSpecificZoneAndHistory(voyage, history);
    return result;
}

function calculateRiskWithSpecificZoneAndHistory(voyage, history, result) {
    if (voyage.zone === 'china' && hasChina(history)) {
        return -2;
    }
    return 0;
}

function calculateRiskWithHistoryProfit(history) {
    return history.filter(v => v.profit < 0).length;
}

function calculateRiskWithHistoryLength(history) {
    let result = 1;
    if (history.length < 5) {
        result += 4;
    }
    return result;
}

function voyageProfitFactor(voyage, history) {
    if (voyage.zone === 'china' && hasChina(history)) {
        return calculateProfitWithBothChinaAndHistoryHasChina(history, voyage);
    }
    return calculateProfitWithNotChinaOrNotHasChinaHistory(history, voyage);
}

function calculateProfitWithBothChinaAndHistoryHasChina(history, voyage) {
    let result = 6;
    if (history.length > 10) {
        result += 1;
    }
    if (voyage.length > 12) {
        result += 1;
    }
    if (voyage.length > 18) {
        result -= 1;
    }
    return result;
}

function calculateProfitWithNotChinaOrNotHasChinaHistory(history, voyage) {
    let result = 2
    if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
        result += 1
    }
    if (history.length > 8) {
        result += 1;
    }
    if (voyage.length > 14) {
        result -= 1;
    }
    return result;
}

function createRankData(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    return {
        vpf: vpf,
        vr: vr,
        chr: chr
    }
}

module.exports = {
    voyageRisk,
    captainHistoryRisk,
    voyageProfitFactor,
    createRankData
};