<template>
  <div class="content">
    <div class="content__header">
      <div class="content__header__left">
        <p>Weekly Report</p>
        <span>Description Description Description</span>
      </div>
      <div class="content__header__right">
        <button class="content__header__right__btnDisable">Run Test</button>
        <div class="content__header__right__line"></div>
        <button class="content__header__right__btnCancel">Cancel</button>
        <button class="content__header__right__btnSave">Save</button>
      </div>
    </div>
    <div class="content__1">
      <div class="content__1__left">
        <div class="content__1__left__noti">
          <img src="../../public/Start.svg" alt="">
          <p>start</p>
        </div>
      </div>
      <div class="content__1__center">
        <div class="content__1__center__left">
          <div class="content__1__center__left__note">
            <p><b>Note:</b> You can associate multiple Actions or Flows to create a single new Flow.</p>
          </div>
          <div class="content__1__center__left__name-tab">
            <p class="content__1__center__left__name-tab--active">Action</p>
            <p>Flow</p>
          </div>
          <div class="content__1__center__left__action">
            <div class="content__1__center__left__action__left"></div>
            <div class="content__1__center__left__action__right">
              <div class="content__1__center__left__action__right__search">
                <input type="text" placeholder="Search by Action Name">
                <button>
                  <img src="../../public/ic_search_b_16.svg" alt="" srcset="">
                </button>
              </div>
            </div>
            <div class="content__1__center__left__content">
              <div class="content__1__center__left__content__item">

              </div>
            </div>
          </div>
        </div>
        <div class="content__1__center__right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components : {
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.content {
  width: 100%;
  background-color: #f3f4f8;
  &__header {
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 32px;
    &__left {
      p {
        padding: 0;
        margin: 0px 0px 5px 0px;
        color: #000;
        font-size: 34px;
        font-weight: bold;
      }
      span {
        color: #0c1533;
      }
    }
    &__right {
      display: flex;
      button {
        width: 102px;
        height: 32px;
        border: solid 1px #212121;
        background-color: #fff;
      }
      &__line {
        width: 1px;
        height: 30px;
        margin: 0px 10px;
        background-color: #ccc;
      }
      &__btnDisable {
        color: #b7b7b7;
        border-color:#b7b7b7 !important;
      }
      &__btnSave {
        border: solid 1px #4871e4 !important;
        background-color: #4871e4 !important;
        color: #fff;
      }
      &__btnCancel {
        background-color: #fff;
        margin-right: 12px;
      }
    }
  }
  &__1 {
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.17);
    background-color: #f0f2fb;
    display: flex;
    margin: 0px 32px;
    &__left {
      width: 250px;
      padding: 32px;
      &__noti{
        display: flex;
        align-items: center;
        height: 35px;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 0px 20px;
        background-color: #fff;
        p {
          margin-left: 5px;
        }
        img {
          height: 20px;
        }
      }
    }
    &__center {
      display: flex;
      background-color: #fff;
      width: 736px;
      height: 500px;
      &__left {
        border-right: 1px solid #ccc;
        width: 450px;
        height: 100%;
        padding: 24px;
        &__note {
          padding: 0px 16px;
          background-color: #ccc;
          border: 1px solid#ccc;
          border-radius: 10px;
        }
        &__name-tab {
          display: flex;
          border-bottom: 1px solid #ccc;
          color: #6b6b6d;
          margin-top: 10px;
          p {
            margin: 0px 10px 0px 0px;
          }
          &--active {
            border-bottom: 1px solid #2196f3;
            color: #2196f3;
          }
        }
        &__action {
          display: flex;
          justify-content: space-between;
          margin: 10px 0px;
          &__left {
            width: 200px;
          }
          &__right {
            &__search {
              margin-right: 10px;
              width: 200px;
              position: relative;
              input {
                width: 100%;
                border: none;
                padding: 5px;
                border-bottom: 1px solid #ccc;
              }
              button {
                position: absolute;
                border: none;
                background-color: inherit;
                top: 0;
                right: -5px;
              }
            }
          }
        }
        &__content {
          display: flex;
          &__item {
            
          }
        }
      }
    }
  }
}
</style>
