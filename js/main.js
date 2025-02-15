document.addEventListener('DOMContentLoaded', () => {
    // Canvasコンテキスト取得
    const ctx = document.getElementById('myChart').getContext('2d');

    // (1) チャートを一度だけ生成
    const myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
            // 初期表示のデータを設定 (例: dataset1)
            datasets: [
                {
                    label: '選択中: dataset1',
                    data: chartDataMap.dataset1,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'X軸'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Y軸'
                    }
                }
            }
        }
    });

    // (2) データだけ更新する関数
    function updateChartData(datasetKey) {
        // 対応するデータを取得
        const selectedData = chartDataMap[datasetKey];

        // 1番目(0番目)のdatasetのdataを差し替え
        myChart.data.datasets[0].data = selectedData;

        // ラベルも変えたい場合は下記のように上書き
        myChart.data.datasets[0].label = `選択中: ${datasetKey}`;

        // 変更を適用して再描画
        myChart.update();
    }

    // (3) プルダウンの変更イベントを設定
    const dataSelect = document.getElementById('dataSelect');
    dataSelect.addEventListener('change', (e) => {
        updateChartData(e.target.value);
    });
});