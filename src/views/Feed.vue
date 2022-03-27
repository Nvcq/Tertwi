<template>
  <div class="about">
    <h1>C'EST LE FEED</h1>
    <br>
    <ul id="example-1" class="text-blue">
      <li :key="'post-' + post.id" v-for="post in posts">
        <h4>{{ post.author }}</h4>
        <p>{{ post.content }}</p>
        <br>
        <br>
      </li>
    </ul>

  </div>
</template>


<script>

import { mapState, mapActions } from "vuex";

export default{
name: "feed",
data() {
  return{
  posts: [],
  };
},
created(){
    this.getAllPosts();
},
methods: {
  async getAllPosts(){
    const { data, error } = await this.$supabase.from("posts").select();
    if(data){
      this.posts = data;
    }else{
      console.log(error);
    }
  }
}
};
</script>
