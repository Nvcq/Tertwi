<template>
  <div>
    <h1>POSSST</h1>
    <input type="text" name="content" v-model="post.content" id="content" autocomplete="content">
    <button type="submit" @click="updatePost()">Update</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      post: {
        created_at: "",
        content: "",
        author: "",
      },
    }
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const { data, error } = await this.$supabase.from("posts").select().match({ id: this.$route.params.id }).single();
      if (data) {
        this.post = data;
      } else {
        console.log(error);
      }
    },
    async updatePost() {
      const { data, error } = await this.$supabase.from("posts").update(this.post).match({ id: this.$route.params.id });
      if (data) {
        this.$router.push({ name: "myfeed" });
      } else {
        console.log(error);
      }
    }
  },
}
</script>
