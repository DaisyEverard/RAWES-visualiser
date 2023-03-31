import React from "react";

const Info = () => {
    return     <div id="info-tab" className="tab">
    <h1>How It Works</h1>
    <p>What the symbols mean, and their percieved value in semi-statistical analysis</p>
    <ul>
        <li><h4>++ Significant positive contribution</h4>
            <p>value: 1</p>
            <p>Significant service provided by the wetland
                and a key element of its ecological character.</p>
            <p>Large number of beneficiaries (relative to
                wetland context)</p>
        </li>
        <li><h4>+  Positive contribution</h4>
            <p>value: 0.5</p>
            <p>One of many services provided by the wetland
                and an element of its ecological character</p>
            <p>• Limited number of beneficiaries (relative to
                wetland context)</p>
        </li>
        <li><h4>0  Negligible contribution</h4>
            <p>value: 0</p>
            <p>No obvious beneficiaries or benefits</p>
            <p> Not an important known part of the wetland’s
                ecological character</p>
        </li>
        <li><h4>-  Negative contribution</h4>
            <p>value: -0.5</p>
            <p>Limited number of dis-beneficiaries</p>
        </li>
        <li><h4>-- Significant negative contribution</h4>
            <p>value: -1</p>
            <p>Large number of dis-beneficiaries</p>
        </li>
        <li><h4>?  Gaps in evidence</h4>
            <p>Value: Not included</p>
            <p>Further evidence needs to be obtained</p>
        </li>

    </ul>
</div>
}

export default Info; 