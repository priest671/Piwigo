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
  <span class="icon-sitemap">{$CATEGORIES_NAV}</span>
  <span> 
    <label for="displayTuile">Icon 1</label><input type="radio" name="layout" class="switchLayout" id="displayTuile" checked/><label for="displayLine">Icon 2</label><input type="radio" name="layout" class="switchLayout" id="displayLine"/><label for="displayAutre">Icon 3</label><input type="radio" name="layout" class="switchLayout" id="displayAutre"/>
  </span>
</div>
{assign var='color_tab' value=["icon-red", "icon-blue", "icon-yellow", "icon-purple", "icon-green"]}
<div class="categoryContainer">
  <div class="addAlbum">
    <div class="addAlbumHead" onclick="$('.addAlbum').addClass('input-mode');">
      <span class="icon-plus-circled icon-blue"></span>
      <p>{"Add Album"|@translate}
    </div>
    <form action="{$F_ACTION}" method="post">
      <input type="hidden" name="pwg_token" value="{$PWG_TOKEN}">
      <label for="virtual_name">{"Album Name"|@translate}</label>
      <input type="text" name="virtual_name" placeholder="{"Portraits..."|@translate}">
      <button name="submitAdd" type="submit" class="buttonLike">
          <i class="icon-plus"></i> {"Create"|@translate}
        </button>
      <a onclick="$('.addAlbum').removeClass('input-mode');">{"Cancel"|@translate}</a>
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
      <a href="{$category.U_EDIT}" title="{'Edit'|@translate}"><span class="icon-pencil"></span>{*{'Edit'|@translate}*}</a>
      <a href="{$category.U_CHILDREN}" class="actionTitle" title="{'sub-albums'|@translate}"><span class="icon-sitemap"></span>{*{'sub-albums'|@translate}*}</a>
      {if cat_admin_access($category.ID)}
      <a href="{$category.U_JUMPTO}" title="{'Visit Gallery'|@translate}"><span class="icon-eye"></span>{*{'Visit Gallery'|@translate}*}</a>
      {else}
      <span href="{$category.U_JUMPTO}" title="{'This album is private'|@translate}"><span class="icon-eye"></span>{*{'Visit Gallery'|@translate}*}</span>
      {/if}
      <a href="{$category.U_ADD_PHOTOS_ALBUM}" title="{'Add Photos'|@translate}"><span class="icon-plus"></span>{*{'Add Photos'|@translate}*}</a>
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

.selectedAlbum span:first-child {
  margin-left: 50px;
}

.selectedAlbum span:last-child {
  margin-right: 50px;
}

.selectedAlbum label {
    margin: 0;

  padding: 10px;
  background: red;
}

.switchLayout {
  display: none;
}





/*
 *  Display of album n°1
 */
.albumTop {
  display: flex;
  flex-direction: row;

  padding: 0px 20px;
  height: 60px;

  align-items: baseline;
}

.categoryBox, .addAlbum{
  max-height: 200px;
  min-width: 22%;
}

.albumIcon span{
  font-size: 15px;
  width: 21px;
  padding: 5px;
  border-radius: 30px;
}

.albumTitle, .addAlbum p {
  font-size: 21px;
}

.albumInfos {
  color: #a9a9a9;
  font-size: 18px;
  font-weight: bold;
}

.albumActions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 20px;
}

.albumActions a span{
  font-size: 17px;
}

.albumActions a:first-child{
  margin-left: 40px;
}

.albumActions a:last-child {
  margin-right: 40px;

}

</style>