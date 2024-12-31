function calculateIncrement() {
    const salary = parseFloat(document.getElementById('salary').value);
    const performance = parseFloat(document.getElementById('performance').value);
    const codeQuality = parseFloat(document.getElementById('codeQuality').value);

    // Base calculations
    const baseIncrement = 8.0;
    const performanceBonus = (performance - 3) * 2;
    const skillsBonus = 5.0;
    const codeQualityBonus = (codeQuality - 3) * 1.5;

    const totalIncrement = baseIncrement + performanceBonus + skillsBonus + codeQualityBonus;
    const newSalary = salary * (1 + totalIncrement / 100);

    // Update increment section
    document.getElementById('baseIncrement').textContent = `${baseIncrement.toFixed(1)}%`;
    document.getElementById('performanceBonus').textContent = `${performanceBonus.toFixed(1)}%`;
    document.getElementById('skillsBonus').textContent = `${skillsBonus.toFixed(1)}%`;
    document.getElementById('totalIncrement').textContent = `${totalIncrement.toFixed(1)}%`;
    document.getElementById('newSalary').textContent = `$${newSalary.toLocaleString()}`;

    // Calculate bonus
    const baseBonus = salary * 0.12;
    const bonusMultiplier = performance / 3;
    const totalBonus = baseBonus * bonusMultiplier;

    // Update bonus section
    document.getElementById('baseBonus').textContent = `$${baseBonus.toLocaleString()}`;
    document.getElementById('bonusMultiplier').textContent = `${bonusMultiplier.toFixed(2)}x`;
    document.getElementById('totalBonus').textContent = `$${totalBonus.toLocaleString()}`;
}

// Add event listeners
document.getElementById('salary').addEventListener('input', calculateIncrement);
document.getElementById('performance').addEventListener('input', calculateIncrement);
document.getElementById('codeQuality').addEventListener('input', calculateIncrement);

// Initial calculation
calculateIncrement();
