<template lang="html">
  <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title ">dataView</h3>
                  </div>
                  <div class="panel-body view">
                      <div id="chartOne">
                          <!-- <h1>chartOne</h1> -->
                      </div>
                      <div id="chartTwo">
                          <!-- <h1>chartTwo</h1> -->
                      </div>
                      <div id="tableOne">
                          <h2>use</h2>
                          <xkTable></xkTable>
                      </div>
                      <div id="tableTwo">
                          <h2>unused</h2>
                          <xkTable></xkTable>
                      </div>
                      <div id="tableThree">
                          <h2>large</h2>
                          <xkTable></xkTable>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import xkTable from './xkTable'
export default {
    name:'xkIndex',
    components:{
        xkTable
    },
    data(){
        return{

        }
    },
    mounted(){
        // chartOne
        var chartOne = echarts.init(document.getElementById("chartOne"));
        // chartOne.setOption({
        //     backgroundColor: '#2c343c',
        //     series : [
        //         {
        //             name: '访问来源',
        //             type: 'pie',
        //             radius: '55%',
        //             // roseType: 'angle',
        //             data:[
        //                 {value:235, name:'视频广告'},
        //                 {value:274, name:'联盟广告'},
        //                 {value:310, name:'邮件营销'},
        //                 {value:335, name:'直接访问'},
        //                 {value:400, name:'搜索引擎'}
        //             ]
        //         }
        //     ]
        // })
        chartOne.setOption({
            title : {
                text: 'chartOne',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });

        // chartTwo
        var chartTwo = echarts.init(document.getElementById("chartTwo"));
        chartTwo.setOption({
            backgroundColor: '#2c343c',

            title: {
                text: 'chartTwo',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'},
                        {value:400, name:'搜索引擎'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        });

        //tableOne
        var tableOne = document.getElementById("tableOne");

        //tableOne
        var tableTwo = document.getElementById("tableTwo");

        //tableOne
        var tableThree = document.getElementById("tableThree");

    },

}
</script>

<style lang="css" scoped>

#chartOne,
#chartTwo,
#tableOne,
#tableTwo,
#tableThree{
    margin: 0 auto;
    width: 600px;
    height:400px;
    /*background-color:rgb(59, 209, 149);*/

}
H2{
    text-align: center;
}
</style>
