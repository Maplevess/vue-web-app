"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[909,772],{909:function(t,e,o){o.r(e),o.d(e,{default:function(){return X}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-container"},[e("van-nav-bar",{attrs:{title:"黑马头条","left-arrow":"",fixed:""},on:{"click-left":function(e){t.onClickLeft=t.$router.back()}}}),e("div",{staticClass:"main-wrap"},[t.loading?e("div",{staticClass:"loading-wrap"},[e("van-loading",[t._v(" 加载中 ")])],1):t._e(),t.article.title?e("div",{staticClass:"article-detail markdown-body"},[e("h1",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),e("van-cell",{staticClass:"user-info",attrs:{center:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-image",{staticClass:"avatar",attrs:{fit:"cover",round:"",width:"30px",height:"30px",src:t.article.aut_photo}})]},proxy:!0},{key:"title",fn:function(){return[e("div",{staticClass:"user-name"},[t._v(t._s(t.article.aut_name))])]},proxy:!0},{key:"label",fn:function(){return[e("div",{staticClass:"publish-date"},[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])]},proxy:!0},{key:"right-icon",fn:function(){return[e("FollowUser",{attrs:{isFollowed:t.article.is_followed,userId:t.article.aut_id},on:{"update:isFollowed":function(e){return t.$set(t.article,"is_followed",e)},"update:is-followed":function(e){return t.$set(t.article,"is_followed",e)}}})]},proxy:!0}],null,!1,656727465)}),e("div",{ref:"article-content",staticClass:"article-content",domProps:{innerHTML:t._s(t.article.content)}}),e("van-divider",[e("div",{attrs:{id:"demo"}}),t._v(" 文章结束")]),e("CommentList",{ref:"comment-list",attrs:{targetId:t.articleId,totalCount:t.totalCommentCount},on:{"update:totalCount":function(e){t.totalCommentCount=e},"update:total-count":function(e){t.totalCommentCount=e},"reply-click":t.onReplyClick}})],1):404===t.errStatus?e("div",{staticClass:"error-wrap"},[e("van-icon",{attrs:{name:"failure"}}),e("p",{staticClass:"text"},[t._v("该资源不存在或已删除")])],1):e("div",{staticClass:"error-wrap"},[e("van-icon",{attrs:{name:"failure"}}),e("p",{staticClass:"text"},[t._v("内容加载失败！")]),e("van-button",{staticClass:"retry-btn",on:{click:t.loadArticleInfo}},[t._v("点击重试")])],1)]),e("div",{staticClass:"article-bottom"},[e("van-button",{staticClass:"comment-btn",attrs:{round:"",size:"small"},on:{click:function(e){t.isPostShow=!0}}},[t._v("写评论")]),e("van-icon",{attrs:{name:"comment-o",badge:t.totalCommentCount}}),e("CollectArticle",{attrs:{articleId:t.article.art_id},model:{value:t.article.is_collected,callback:function(e){t.$set(t.article,"is_collected",e)},expression:"article.is_collected"}}),e("LikeArticle",{attrs:{articleId:t.article.art_id,attitude:t.article.attitude},on:{"update:attitude":function(e){return t.$set(t.article,"attitude",e)}}}),e("van-icon",{attrs:{name:"share-o"}})],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.isPostShow,callback:function(e){t.isPostShow=e},expression:"isPostShow"}},[e("CommentPost",{attrs:{targetId:t.article.art_id},on:{"post-success":t.onPostSuccess}})],1),e("van-popup",{style:{height:"100%"},attrs:{position:"bottom"},model:{value:t.isReplyShow,callback:function(e){t.isReplyShow=e},expression:"isReplyShow"}},[t.isReplyShow?e("CommentReply",{attrs:{comment:t.currentComment},on:{close:function(e){t.isReplyShow=!1}}}):t._e()],1)],1)},n=[],i=o(432),a=o(6471),l=function(){var t=this,e=t._self._c;return t.isFollowed?e("van-button",{staticClass:"follow-btn",attrs:{icon:"plus",type:"info",round:"",size:"small"},on:{click:t.onFollow}},[t._v(" 关注 ")]):e("van-button",{staticClass:"follow-btn",attrs:{round:"",size:"small",loading:t.btnLoading},on:{click:t.onFollow}},[t._v(" 已关注 ")])},r=[],c={name:"FollowUser",props:{isFollowed:{type:Boolean,default:!0},userId:{type:String,default:""}},data(){return{btnLoading:!1}},methods:{async onFollow(){this.btnLoading=!0;try{this.isFollowed?await(0,i.YE)(this.userId):await(0,i.u5)(this.userId),this.$emit("update:isFollowed",!this.isFollowed)}catch(t){t.response&&400===t.response.status?this.$toast("你不能关注自己！！！"):this.$toast("操作失败, 请重试！！！")}this.btnLoading=!1}}},m=c,u=o(1001),d=(0,u.Z)(m,l,r,!1,null,"f83b9d86",null),p=d.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"CollectArticle"},[e("van-icon",{class:{collected:t.value},attrs:{name:t.value?"star":"star-o",loading:t.btnLoading},on:{click:t.onCollect}})],1)},f=[],v={name:"CollectArticle",props:{value:{type:Boolean,default:!0},articleId:{type:String,default:""}},data(){return{btnLoading:!1}},methods:{async onCollect(){this.btnLoading=!0;try{this.value?await(0,i.u1)(this.articleId):await(0,i.$c)(this.articleId),this.$emit("input",!this.value)}catch(t){t.response&&400===t.response.status?this.$toast("你不能关注自己！！！"):this.$toast("操作失败, 请重试！！！")}this.btnLoading=!1}}},C=v,g=(0,u.Z)(C,h,f,!1,null,"a77cd4ae",null),_=g.exports,y=function(){var t=this,e=t._self._c;return e("div",[e("van-icon",{class:{like:1===t.attitude},attrs:{name:1===t.attitude?"good-job":"good-job-o",loading:t.btnLoading},on:{click:t.onCollect}})],1)},b=[],w={name:"LikeArticle",props:{attitude:{type:Number,default:-1},articleId:{type:String,default:""}},inject:{articleIdPro:{type:String,default:""}},mounted(){console.log(this.articleIdPro,"injext")},data(){return{btnLoading:!1}},methods:{async onCollect(){this.btnLoading=!0;let t=this.attitude;try{1===this.attitude?(t=-1,await(0,i.nD)(this.articleId)):(t=1,await(0,i.LH)(this.articleId)),this.$emit("update:attitude",t)}catch(e){e.response&&400===e.response.status?this.$toast("你不能关注自己！！！"):this.$toast("操作失败, 请重试！！！")}this.btnLoading=!1}}},k=w,I=(0,u.Z)(k,y,b,!1,null,"0514156b",null),S=I.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment-list"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(e){t.error=e}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(o,s){return e("CommentItem",{key:s,attrs:{comment:o},on:{"reply-click":t.onReplyClick}})})),1)],1)},L=[],$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment-item"},[e("van-cell",{attrs:{title:t.comment.content},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-image",{staticClass:"avatar",attrs:{fit:"cover",round:"",width:"30px",height:"30px",src:t.comment.aut_photo}})]},proxy:!0},{key:"title",fn:function(){return[e("div",{staticClass:"user-name"},[t._v(t._s(t.comment.aut_name))])]},proxy:!0},{key:"label",fn:function(){return[e("p",{staticClass:"comment-content"},[t._v(" "+t._s(t.comment.content)+" ")]),e("div",{staticClass:"bottom-info"},[e("div",{staticClass:"publish-date"},[t._v(t._s(t._f("relativeTime")(t.comment.pubdate)))]),e("van-button",{staticClass:"reply-btn",attrs:{round:""},on:{click:function(e){return t.$emit("reply-click",t.comment)}}},[t._v(" 回复"+t._s(t.comment.reply_count)+" ")])],1)]},proxy:!0},{key:"right-icon",fn:function(){return[e("van-button",{staticClass:"like-btn",class:{like:t.comment.is_liking},attrs:{icon:t.comment.is_liking?"good-job":"good-job-o",loading:t.btnLoading},on:{click:t.onCommentLike}},[t._v(" "+t._s(t.comment.like_count||"赞")+" ")])]},proxy:!0}])})],1)},P=[],A={name:"commentItem",props:{comment:{type:Object,default:()=>({})}},data(){return{btnLoading:!1,commentClone:this.comment}},methods:{async onCommentLike(){this.btnLoading=!0;try{this.comment.is_liking?(await(0,i.IY)(this.comment.com_id),this.commentClone.like_count--):(await(0,i.Ge)(this.comment.com_id),this.commentClone.like_count++),this.commentClone.is_liking=!this.comment.is_liking}catch(t){this.$toast("操作失败, 请重试")}this.btnLoading=!1}}},R=A,F=(0,u.Z)(R,$,P,!1,null,"d57bdc3e",null),j=F.exports,Z={name:"CommentList",components:{CommentItem:j},props:{targetId:{type:String,default:""},totalCount:{type:Number,default:0},type:{type:String,default:"a"}},data(){return{list:[],loading:!1,finished:!1,offset:null,error:!1}},methods:{async onLoad(){try{const{data:t}=await(0,i.nr)({type:this.type,source:this.targetId,offset:this.offset,limit:10});console.log(t,"res"),this.list.push(...t.data.results),this.$emit("update:totalCount",t.data.total_count),this.loading=!1,t.data.results.length?this.offset=t.data.last_id:this.finished=!0}catch(t){console.log(t),this.loading=!1,this.error=!0}},unshiftComment(t){this.list.unshift(t.new_obj)},onReplyClick(t){this.$emit("reply-click",t)}}},z=Z,T=(0,u.Z)(z,x,L,!1,null,"6d06509d",null),U=T.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment-post"},[e("van-field",{staticClass:"post-field",attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"50",placeholder:"优质评论优先显示","show-word-limit":""},model:{value:t.message,callback:function(e){t.message="string"===typeof e?e.trim():e},expression:"message"}}),e("van-button",{staticClass:"post-btn",attrs:{size:"small",disable:!t.message.length},on:{click:t.onAddComent}},[t._v(" 发布 ")])],1)},D=[],E={name:"CommentPost",props:{targetId:{type:String,default:""},articleId:{type:String,default:""}},data(){return{message:""}},methods:{async onAddComent(){try{const t=this.message.trim();if(!t.length)return;const{data:e}=await(0,i.AD)({target:this.targetId,content:this.message,art_id:this.articleId||null});console.log(e),this.message="",this.$emit("post-success",e.data),this.$toast.success("发布成功")}catch(t){this.$toast.fail("发布失败")}}}},H=E,N=(0,u.Z)(H,B,D,!1,null,"2644eaca",null),O=N.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment-reply"},[e("van-nav-bar",{attrs:{title:t.comment.reply_count>0?`${t.comment.reply_count}条回复`:"暂无回复",fixed:"","left-arrow":""},scopedSlots:t._u([{key:"left",fn:function(){return[e("van-icon",{attrs:{name:"cross"},on:{click:function(e){return t.$emit("close")}}})]},proxy:!0}])}),e("div",{staticClass:"scroll-wrap"},[e("CommentItem",{attrs:{comment:t.comment}}),e("van-cell",[t._v("全部回复")]),e("CommentList",{ref:"comment-list",attrs:{targetId:t.comment.com_id,type:"c"}})],1),e("div",{staticClass:"reply-bottom"},[e("van-button",{staticClass:"reply-btn",attrs:{round:"",size:"small"},on:{click:function(e){t.isPostShow=!0}}},[t._v(" 写评论 ")])],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.isPostShow,callback:function(e){t.isPostShow=e},expression:"isPostShow"}},[e("CommentPost",{attrs:{targetId:t.comment.com_id,articleId:t.$route.params.articleId},on:{"post-success":t.onPostSuccess}})],1)],1)},q=[],G={name:"CommentReply",components:{CommentItem:j,CommentList:U,CommentPost:O},props:{comment:{type:Object,default:()=>({})}},data(){return{commentClone:this.comment,isPostShow:!1}},methods:{onPostSuccess(t){this.commentClone.replay_count++,this.isPostShow=!1,this.$refs["comment-list"].unshiftComment(t)}}},M=G,J=(0,u.Z)(M,Y,q,!1,null,"34653f55",null),K=J.exports,Q={name:"ArticleAPP",components:{FollowUser:p,CollectArticle:_,LikeArticle:S,CommentList:U,CommentPost:O,CommentReply:K},props:{articleId:{type:String,default:""}},provide:function(){return{articleIdPro:this.articleId}},data(){return{article:{},loading:!0,errStatus:0,totalCommentCount:0,isPostShow:!1,isReplyShow:!1,currentComment:{}}},created(){this.loadArticleInfo()},methods:{async loadArticleInfo(){this.loading=!0;try{const{data:t}=await(0,i.rk)(this.articleId);console.log(t),this.article=t.data,setTimeout((()=>{this.previewimage()}),0)}catch(t){t.response&&404===t.response.status&&(this.errStatus=404),this.$toast("获取文章失败")}this.loading=!1},previewimage(){const t=this.$refs["article-content"],e=t.querySelectorAll("img"),o=[...e].map((t=>t.src));e.forEach(((t,e)=>{t.onclick=()=>{(0,a.Z)({images:o,startPosition:e})}}))},onPostSuccess(t){this.isPostShow=!1,this.$refs["comment-list"].unshiftComment(t),console.log(t)},onReplyClick(t){this.currentComment=t||{},console.log(t),this.isReplyShow=!0}}},V=Q,W=(0,u.Z)(V,s,n,!1,null,"2819fd60",null),X=W.exports}}]);
//# sourceMappingURL=909.41419372.js.map