<template>
<!-- v-if: 조건식이 참일때만 div를 보여줌 -->
<div class="black-bg" v-if="모달창열렸니 == true">
  <div class="white-bg">
    <h4>상세페이지</h4>
    <p>상세 페이지 내용</p>
    <button class="close-btn" @click="모달창열렸니 = false">닫기</button>
  </div>
</div><div class="menu">
  <a v-for="arr in 메뉴들" :key="arr">{{ arr }}</a>
</div>

<!-- 상품 목록을 어떻게 배열로 출력하지?? -->

  <!-- <div v-for="(a,i) in products" :key="i" >
    반복되면서 0,1,2 되는 변수를 넣어주면 됨
    <h4>{{a}}</h4> 
    <p>50만원</p>
    </div> -->

<div>
  <img src="./assets/room0.jpg" alt="방 이미지0" class="room-img">
    <h4 @click="모달창열렸니 = true">{{products[0]}}</h4> 
    <p>50만원</p>
    <!-- v-on=@ -->
    <button @click="신고수[0] += 100">허위매물신고</button> <span>신고수: {{신고수[0]}}</span>
</div>

<div>
  <img src="./assets/room1.jpg" alt="방 이미지2" class="room-img">
    <h4>{{products[1]}}</h4> 
    <p>50만원</p>
    <button @click="신고수[1]++">허위매물신고</button> <span>신고수: {{신고수[1]}}</span>
</div>

<div>
  <img src="./assets/room2.jpg" alt="방 이미지3" class="room-img">
    <h4>{{products[2]}}</h4> 
    <p>50만원</p>
    <button @click="신고수[2] += 1000">허위매물신고</button> <span>신고수: {{신고수[2]}}</span>
</div>
  
</template>

<script>



export default {
  name: 'App',
  data(){
    return{
      모달창열렸니: false,
      btn: 'color: #fff',
      신고수: [0,0,0],
      // 신고수1:0,
      // 신고수2:0,
      // 신고수3:0,
      메뉴들: ['Home', 'Products', 'About'],
      스타일: 'color : pink',
      products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸']
    }
  },

  methods : {
    increase(){
      // 축약하고 싶은 코드 넣기
      this.신고수 += 1;
    }

  },


  components: {
    
  }
}
</script>

<style>
body{
  margin:0;
  padding: 30px 20px;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width:100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position:fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding:20px;
}
.room-img{
  width:100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background:darkslateblue;
  padding:15px;
  border-radius: 5px;
}
.menu a {
  color:white;
  padding: 10px;
}
</style>
