function hitungFibonacci() {
    const n = parseInt(document.getElementById('n').value);
    let a = 0, b = 1;
    let hasil = [a, b];
    
    for (let i = 2; i < n; i++) {
        let c = a + b;
        hasil.push(c);
        a = b;
        b = c;
    }
    
    document.getElementById('hasil').textContent = hasil.join(', ');
}

function hitungVolume() {
    const jenis = document.getElementById('jenis').value;
    const sisi = parseFloat(document.getElementById('sisi').value);
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const jariJari = parseFloat(document.getElementById('jarijari').value);
    
    if (jenis === 'kubus') {
        const volume = sisi ** 3;
        document.getElementById('hasil1').textContent = `Volume kubus adalah ${volume} cm³`;
    } else if (jenis === 'balok') {
        const volume = panjang * lebar * tinggi;
        document.getElementById('hasil1').textContent = `Volume balok adalah ${volume} cm³`;
    } else if (jenis === 'bola') {
        const volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);
        document.getElementById('hasil1').textContent = `Volume bola adalah ${volume.toFixed(2)} cm³`;
    } else if (jenis === 'kerucut') {
        const volume = (1 / 3) * Math.PI * Math.pow(jariJari, 2) * tinggi;
        document.getElementById('hasil1').textContent = `Volume kerucut adalah ${volume.toFixed(2)} cm³`;
    }
}

document.getElementById('jenis').addEventListener('change', function() {
    const jenis = this.value;
    if (jenis === 'kubus') {
        document.getElementById('sisi').style.display = 'block';
        document.getElementById('panjang').style.display = 'none';
        document.getElementById('lebar').style.display = 'none';
        document.getElementById('tinggi').style.display = 'none';
        document.getElementById('jarijari').style.display = 'none';
    } else if (jenis === 'balok') {
        document.getElementById('sisi').style.display = 'none';
        document.getElementById('panjang').style.display = 'block';
        document.getElementById('lebar').style.display = 'block';
        document.getElementById('tinggi').style.display = 'block';
        document.getElementById('jarijari').style.display = 'none';
    } else if (jenis === 'bola'){
        document.getElementById('sisi').style.display = 'none';
        document.getElementById('panjang').style.display = 'none';
        document.getElementById('lebar').style.display = 'none';
        document.getElementById('tinggi').style.display = 'none';
        document.getElementById('jarijari').style.display = 'block';
    } else if (jenis === 'kerucut') {
        document.getElementById('sisi').style.display = 'none';
        document.getElementById('panjang').style.display = 'none';
        document.getElementById('lebar').style.display = 'none';
        document.getElementById('tinggi').style.display = 'block';
        document.getElementById('jarijari').style.display = 'block';
    }
});

