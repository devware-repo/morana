<template>
  <div class="site-wrap login d-flex align-content-center">
    <div class="login-wrap w-100 mt-5 m-lg-auto">
      <nuxt />
      <footer class="site-footer position-relative p-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="row pt-md-5 mt-md-5 text-center">
                <div class="col-md-12">
                  <div class="pt-5">
                    <p>
                      Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear())
                      </script>
                      All rights reserved | Made By Devware
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- .login-wrap -->
  </div>
  <!-- .site-wrap -->
</template>

<script>
export default {
  middleware: 'notAuthenticated',
  head() {
    return {
      title: 'Morana Taguatinga Shopping | Login'
    }
  }
}
</script>
