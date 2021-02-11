{combine_script id='common' load='footer' path='admin/themes/default/js/common.js'}

{combine_script id='alternativeView' load='footer' path='admin/themes/default/js/cat_list_new.js'}

{footer_script require='jquery.ui.sortable'}{literal}
jQuery(document).ready(function(){
  $(".addAlbumHead").click(function () {
    $(".addAlbum input[name=virtual_name]").focus();
  })
});
{/literal}{/footer_script}

<div class="selectedAlbum cat-list-album-path">
  <span class="icon-sitemap selectedAlbum-first">{$CATEGORIES_NAV}</span>
  <div class="selectedAlbum-last">
    <input type="radio" name="layout" class="switchLayout" id="displayTuile" checked/><label for="displayTuile"><span class="icon-th-large"></label><input type="radio" name="layout" class="switchLayout" id="displayLine"/><label for="displayLine"><span class="icon-th-list"></label><input type="radio" name="layout" class="switchLayout" id="displayAutre"/><label for="displayAutre"><span class="icon-pause"></label>
  </div>
</div>
{assign var='color_tab' value=["icon-red", "icon-blue", "icon-yellow", "icon-purple", "icon-green"]}
<div class="categoryContainer">
  <div class="addAlbum">
    <div class="addAlbumHead">
      <span class="icon-plus-circled icon-blue"></span>
      <p>{"Add Album"|@translate}
    </div>
    <form action="{$F_ACTION}" method="post">
      <input type="hidden" name="pwg_token" value="{$PWG_TOKEN}">
      {* <label for="virtual_name">{"Album Name"|@translate}</label> *}
      <input type="text" name="virtual_name" placeholder="{"Nom de l'album..."|@translate}">
      <button name="submitAdd" type="submit" class="buttonLike">
          <i class="icon-plus"></i> {"Create"|@translate}
        </button>
      <a class="cancelAddAlbum">{"Cancel"|@translate}</a>
    </form>
  </div>
  {if count($categories)}
  {foreach from=$categories item=category}
  <div class="categoryBox{if $category.IS_VIRTUAL} virtual_cat{/if}" id="cat_{$category.ID}">

    <div class="albumTop">
      <div class="albumIcon">
        <span class="
        {if $category.NB_SUB_ALBUMS == 0}icon-folder-open{else}icon-sitemap{/if}
        {$color_tab[$category.ID % 5]}
        "> </span>
      </div>

      <div class="albumTitle">
        {$category.NAME}
      </div>
    </div>
    <span class="albumInfos"><p>{$category.NB_PHOTOS|translate_dec:'%d photo':'%d photos'}</p> <p>{$category.NB_SUB_PHOTOS|translate_dec:'%d photo':'%d photos'} {$category.NB_SUB_ALBUMS|translate_dec:'in %d sub-album':'in %d sub-albums'}</p></span>

    <div class="albumActions">
      <a href="{$category.U_EDIT}" class="actionEdit" title="{'Edit'|@translate}"><span class="icon-pencil"></span><span class="iconLegend">{'Edit'|@translate}</span></a>
      <a href="{$category.U_CHILDREN}" class="actionTitle" title="{'sub-albums'|@translate}"><span class="icon-sitemap"></span><span class="iconLegend">{'sub-albums'|@translate}</span></a>
      {if cat_admin_access($category.ID)}
      <a href="{$category.U_JUMPTO}" class="actionGalery" title="{'Visit Gallery'|@translate}"><span class="icon-eye"></span><span class="iconLegend">{'Visit Gallery'|@translate}</span></a>
      {else}
      <span href="{$category.U_JUMPTO}" class="actionGalery" title="{'This album is private'|@translate}"><span class="icon-eye"></span><span class="iconLegend">{'Visit Gallery'|@translate}</span></span>
      {/if}
      <a href="{$category.U_ADD_PHOTOS_ALBUM}" class="actionAdd" title="{'Add Photos'|@translate}"><span class="icon-plus"></span><span class="iconLegend">{'Add Photos'|@translate}</span></a>
    </div>
  </div>
    {/foreach}
    {/if}
</div>

<style>


/*
 *  Switch btn between views
 */

.selectedAlbum {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: baseline;
}

.selectedAlbum-first {
  margin-left: 50px;
}

.selectedAlbum-last {
  padding: 10px 0px;
  margin-right: 50px;
  border-radius: 10px;
  background: #fafafa !important;
}

.icon-th-large, .icon-th-list, .icon-pause {
  padding: 10px;
  font-size: 19px;

  transition: 0.3s;
}

.selectedAlbum-last input:checked + label{
  background: transparent;
  color: white !important;
}

.selectedAlbum-last input:checked + label span{
  background: orange;
}

.switchLayout {
  display: none;
}

.albumActions a span.iconLegend {
  font-size: 14px;
}

/*
 *  Default display of albums (Tiles)
 */


.albumTop {
  display: flex;
  flex-direction: row;

  padding: 0px 20px;
  height: 75px;

  align-items: baseline;
}

.categoryBox, .addAlbum{
  display: flex;
  flex-direction: column;
  max-height: 200px;
  min-width: 22%;

  /* transition: 1s linear; */
}

.albumIcon span{
  font-size: 15px;
  width: 21px;
  padding: 5px;
  border-radius: 30px;
}

.albumInfos {
  color: #a9a9a9;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.albumInfos p {
  margin: 0 5px;
  text-align: right;
}

.albumActions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: auto;

  width: 100%;
  margin-bottom: 20px;
}

.albumActions a span{
  font-size: 17px;
}

.albumActions a:first-child{
  margin-left: 35px;
}

.albumActions a:last-child {
  margin-right: 35px;
}

.addAlbum form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addAlbum form input {
  border: none;
  box-shadow: 0px 2px 3px #00000024;
  border-radius: 5px;

  margin: 0px 10px;

  max-width: 200px;
  width: 75%;
}

.addAlbum form button {
  margin-bottom: 0;
  height: 30px;
}

</style>