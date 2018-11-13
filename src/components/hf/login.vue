<template>
  <div id="xapp">
    <div id="mydiv" style="height:500px;"></div>
    <div class="xjpLeft">
      <h2 class="manage">Office Automation System</h2>
      <p class="vhp">&nbsp;&nbsp;&nbsp;&nbsp;
        Office automation refers to the varied computer machinery and software used
        to digitally create,collect,store,manipulate,and relay office
        information needed for accomplishing basic tasks and goals.
      </p>
    </div>
    <div class="xjpRight">
      <h3>userName</h3>
      <input  type="text" class="xjpPassinput" placeholder="pick a username"/>
      <h3>passWord</h3>
      <input type="password" class="xjpPassinput" placeholder="pick a password"/>
      <div id="verificationCode">
        <h3>Verification code</h3>
        <input type="text" class="Code" />
        <canvas class="makeCode" width="120" height="40" id="c1" @click="clicks">
        </canvas>
      </div>
      <div class="signUp">Sign In</div>
    </div>
  </div>
</template>

<script>
import canvas from "../../static/js/canvas"
export default {
     name: "login",
      mounted(){
        this.clicks()
        this.updatas()
      },
      methods:{
        clicks(){
          //1.新建一个函数产生随机数
          function rn(min,max){
            return  parseInt(Math.random()*(max-min)+min);
          }
          //2.新建一个函数产生随机颜色
          function rc(min,max){
            var r=rn(min,max);
            var g=rn(min,max);
            var b=rn(min,max);
            return `rgb(${r},${g},${b})`;
          }
          //3.填充背景颜色,颜色要浅一点
          var w=120;
          var h=40;
          var ctx=c1.getContext("2d");
          ctx.fillStyle=rc(180,230);
          ctx.fillRect(0,0,w,h);
          //4.随机产生字符串
          var pool="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
          for(var i=0;i<4;i++){
            var c=pool[rn(0,pool.length)];//随机的字
            var fs=rn(18,40);//字体的大小
            var deg=rn(-30,30);//字体的旋转角度
            ctx.font=fs+'px Simhei';
            ctx.textBaseline="top";
            ctx.fillStyle=rc(80,150);
            ctx.save();
            ctx.translate(30*i+15,15);
            ctx.rotate(deg*Math.PI/180);
            ctx.fillText(c,-15+5,-15);
            ctx.restore();
          }
          //5.随机产生5条干扰线,干扰线的颜色要浅一点
          for(var i=0;i<5;i++){
            ctx.beginPath();
            ctx.moveTo(rn(0,w),rn(0,h));
            ctx.lineTo(rn(0,w),rn(0,h));
            ctx.strokeStyle=rc(180,230);
            ctx.closePath();
            ctx.stroke();
          }
          //6.随机产生40个干扰的小点
          for(var i=0;i<40;i++){
            ctx.beginPath();
            ctx.arc(rn(0,w),rn(0,h),1,0,2*Math.PI);
            ctx.closePath();
            ctx.fillStyle=rc(150,200);
            ctx.fill();
          }
        },
        updatas(){
          var config = {
            vx: 4,	//小球x轴速度,正为右，负为左
            vy: 4,	//小球y轴速度
            height: 2,	//小球高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 200,		//点个数
            color: "121, 162, 185", 	//点颜色
            stroke: "130,255,255", 		//线条颜色
            dist: 6000, 	//点吸附距离
            e_dist: 20000, 	//鼠标吸附加速距离
            max_conn: 10 	//点到点最大连接数
          }
          //调用
          let sc=document.createElement('script')
          sc.src='static/js/canvas.js'
          document.body.appendChild(sc)
          setTimeout(()=>{
            CanvasParticle(config)
          },100)
        }

      },
    }
</script>

<style scoped>
  #xapp{background-color: #2D2D2D;position: relative; width: 100%;height: 100%;}
  #mydiv{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .xjpLeft{
    width: 624px;
    height: 346px;
    position: fixed;
    left:14.20%;
    top: 30%;
    display: block;
  }
  .manage{
    font-size: 50px;
    color: #ffffff;
    line-height: 53px;
    margin-bottom: 30px;
  }
  .vhp{
    color: #a9b2bb;
    font-size: 20px;
  }
  .xjpRight{
    width: 379px;
    height: auto;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 36px 24px;
    position: fixed;
    right:22.06%;
    top: 20%;
  }
  .xjpRight h3{
    color: #333333;
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 13px;
    font-family: -apple-system;
  }
  .xjpRight h3:first-of-type{
    margin-top:0;
  }
  .xjpPassinput{
    width: 100%;
    height: 45px;
    border:1px solid #dde0e4;
    border-radius: 2px;
    color: #333333;
    text-indent: 5px;
  }
  .xjpPassinput::-webkit-input-placeholder{
    font-size: 16px;
    color: #818284;
    padding-left: 10px;
  }
  .xjpPassinput::-ms-input-placeholder{
    font-size: 16px;
    color: #818284;
    padding-left: 10px;
  }
  .xjpPassinput::-moz-input-placeholder{
    font-size: 16px;
    color: #818284;
    padding-left: 10px;
  }
  .xjpPassinput:focus-within{
    border: 1px solid #188bf8;

  }
  #verificationCode{
    overflow: hidden;
    margin-top: 13px;
  }
  .Verification{
    font-size: 14px;
    color: #dcb98f;
    font-weight: 100;
    margin-top: 4px;
    display: none;
  }
  .makeCode{
    float: right;
    border:1px solid #dde0e4;
    width: 120px;
    height: 45px;
    cursor: pointer;
  }
  .Code{
    float: left;
    display: block;
    width: 60%;
    height: 45px;
    border:1px solid #dde0e4;
    border-radius: 2px;
    color: #333333;
    text-indent: 5px;
    text-align: center;
    font-size: 20px;
  }
  .Code:focus-within{
    border: 1px solid #188bf8;
  }
  .signUp{
    width: 100%;
    height: 64px;
    background-color: #2ebc4f;
    line-height: 64px;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    margin-top: 35px;
    cursor: pointer;
  }
</style>
