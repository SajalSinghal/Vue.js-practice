<template>
  <ul class="nav nav-pills">
    <!-- *****************************************Styling active links********************************************* -->

    <!-- We do have bootstrap class active which can make element active but it makes the element active always. So
    we need to make router link active only which contains the anchor tag. We can achieve this by making router-link
    parent element of list tag.-->

    <!-- we have used router-link instead of anchor tag as router-link listens the click listener and loads the 
        router of the app. It doesn't sends the request to the server for page load while anchor tag sends the
    request for page load-->

    <!-- This following change would attach the active class to the active link not to the router-link. But the
    active-class will treat /user active for both home and user component as home router's is / which is also
    present in user's router. TO avoid this situation we can include exact property in router-link tag.-->

    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>

    <router-link to="/user" tag="li" active-class="active">
      <a>User</a>
    </router-link>

    <!-- <router-link to="/user/1" tag="li" active-class="active">
      <a>User 1</a>
    </router-link> -->

    <!-- <router-link to="/user/2" tag="li" active-class="active">
      <a>User 2</a>
    </router-link> -->
  </ul>
</template>

<script>
</script>