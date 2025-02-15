document.addEventListener('DOMContentLoaded', () => {
    // ① プルダウンで切り替える複数のデータを定義
    //    バブルチャートでは {x, y, r} を指定するとバブルのサイズが変わります。


    // Chart.js のインスタンスを保持する変数
    let myChart;

    // ② グラフを初期化/更新する関数
    function renderChart(datasetKey) {
        const ctx = document.getElementById('myChart').getContext('2d');

        // すでにチャートが作られていたら一旦破棄して再生成
        if (myChart) {
            myChart.destroy();
        }

        // datasetKey に応じてデータを取得
        const selectedData = chartDataMap[datasetKey];

        // バブルチャートの設定
        const config = {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: `選択中：${datasetKey}`,
                        data: selectedData,
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
        };

        // Chart.js でバブルチャートを描画
        myChart = new Chart(ctx, config);
    }

    // ③ プルダウンが切り替わったときの処理
    const dataSelect = document.getElementById('dataSelect');
    dataSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value; // "dataset1" or "dataset2"
        renderChart(selectedValue);
    });

    // ④ ページロード時、最初に表示するデータセットを設定
    renderChart('dataset1');
});