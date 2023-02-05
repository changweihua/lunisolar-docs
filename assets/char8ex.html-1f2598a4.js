import{_ as p,V as i,W as o,X as s,Y as n,$ as e,a0 as t,Z as c,F as l}from"./framework-ad9ccf37.js";const u={},d=c('<h1 id="八字增强" tabindex="-1"><a class="header-anchor" href="#八字增强" aria-hidden="true">#</a> 八字增强</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>lunisolar.js</code>本身可能过<code>Lunisolar</code>实例的<code>char8</code>属性实现基本的八字查询功能, 但未包括十神和神煞等功能。使用<strong>Char8Ex</strong>插件后，将会在<code>Lunisolar``实例上添加一个char8ex()</code>方法, 除了包含原char8的功能外，还加入了十神和神煞的查询。</p>',3),r=s("code",null,"lunisolar().char8ex()",-1),m=s("strong",null,"Char8Ex",-1),k=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token parameter">sex</span> 性别 0:坤造，1: 乾造
 * <span class="token keyword">@return</span> 返回一个Char8Ex实例对象
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">char8ex</span><span class="token punctuation">(</span>sex<span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> Char8Ex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：加载<code>char8ex</code>插件时，将自动加载<code>takeSound</code>插件（五行纳音插件），所以请不要再重复加<code>takeSound</code></p></blockquote><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ---  安装</span>
<span class="token comment">// 引入lunisolar</span>
<span class="token keyword">import</span> lunisolar <span class="token keyword">from</span> <span class="token string">&#39;lunisolar&#39;</span>
<span class="token comment">// 引入 theGods 插件</span>
<span class="token keyword">import</span> char8ex <span class="token keyword">from</span> <span class="token string">&#39;lunisolar/plugins/char8ex&#39;</span>
<span class="token comment">// 加载插件</span>
lunisolar<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>char8ex<span class="token punctuation">)</span>


<span class="token comment">// ---  使用</span>
<span class="token comment">// 创建一个Char8Ex实例对象, 该八字为 2023-01-15 12:26出生的男孩</span>
<span class="token keyword">const</span> c8ex <span class="token operator">=</span>  <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2023-01-15 12:26&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">char8ex</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 乾造: 壬寅 癸丑 癸酉 戊午</span>

<span class="token comment">// Char8Ex实例可通过year,month,day,hour属性取得四柱实例 Pillar</span>
<span class="token comment">// 而每个四柱实例（Pillar）又包含纳音、天干、地支、天干十神、地支十神、四柱神煞等功能查询</span>

<span class="token comment">// 取各柱天干十神, 十神和神煞都是以对象形式存在</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>year<span class="token punctuation">.</span>stemTenGod<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 劫財</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>month<span class="token punctuation">.</span>stemTenGod<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 比肩</span>
<span class="token comment">// 注：日主实际并不是十神之一，它位于日柱天干，十神以此推算。</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>day<span class="token punctuation">.</span>stemTenGod<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 日主</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>hour<span class="token punctuation">.</span>stemTenGod<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 正官</span>

<span class="token comment">// 取各柱地支藏干十神</span>
<span class="token comment">// 地支十神通过地支所藏天干推算，所以各柱的地支十神可能存在的个数为1至3个，故以数组形式返回</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>year<span class="token punctuation">.</span>branchTenGod<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> i<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [ &#39;傷官&#39;, &#39;正財&#39;, &#39;正官&#39; ]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>month<span class="token punctuation">.</span>branchTenGod<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> i<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;七殺&#39;, &#39;比肩&#39;, &#39;梟神&#39;]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>day<span class="token punctuation">.</span>branchTenGod<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> i<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;梟神&#39;]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>hour<span class="token punctuation">.</span>branchTenGod<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> i<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;偏財&#39;, &#39;七殺&#39;]</span>

<span class="token comment">//取年柱纳音</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>year<span class="token punctuation">.</span>takeSound<span class="token punctuation">)</span> <span class="token comment">// 金箔金</span>

<span class="token comment">//空亡地支 missing属性返回一个元组，该元组包含两个地支实例： [Branch, Branch]</span>
<span class="token comment">// c8ex.missing 等同于 c8ex.day.missing</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>missing<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> i<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//  [ &#39;戌&#39;, &#39;亥&#39; ]</span>

<span class="token comment">// 取得年柱上的神煞,其它柱类似</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c8ex<span class="token punctuation">.</span>year<span class="token punctuation">.</span>gods<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;文昌貴人&#39;, &#39;金輿&#39;, &#39;天廚貴人&#39;, &#39;劫煞&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>char8ex插件默认语言与lunisolar一样为繁体中文，如需要其它语言，须再另外加载</p></div><h2 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 引入lunisolar</span>
<span class="token keyword">import</span> lunisolar <span class="token keyword">from</span> <span class="token string">&#39;lunisolar&#39;</span>
<span class="token comment">// 引入 theGods 插件</span>
<span class="token keyword">import</span> char8ex <span class="token keyword">from</span> <span class="token string">&#39;lunisolar/plugins/char8ex&#39;</span>
<span class="token comment">// 加载插件</span>
lunisolar<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>char8ex<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 创建一个Char8Ex实例</span>
<span class="token keyword">const</span> c8 <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">char8ex</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 参数0为坤造，1为乾造</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="年柱" tabindex="-1"><a class="header-anchor" href="#年柱" aria-hidden="true">#</a> 年柱</h3>`,10),v=s("strong",null,"Pillar",-1),h=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Pillar<span class="token punctuation">}</span> 返回一个四柱对对象，功能类似SB类，但扩展了更多方法
 */</span>
c8<span class="token punctuation">.</span>year
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="月柱" tabindex="-1"><a class="header-anchor" href="#月柱" aria-hidden="true">#</a> 月柱</h3><p>取得月柱， 返回一个四柱对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Pillar<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>month
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日柱" tabindex="-1"><a class="header-anchor" href="#日柱" aria-hidden="true">#</a> 日柱</h3><p>取得日柱， 返回一个四柱对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Pillar<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>day
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时柱" tabindex="-1"><a class="header-anchor" href="#时柱" aria-hidden="true">#</a> 时柱</h3><p>取得时柱， 返回一个四柱对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>SB<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>hour
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日主" tabindex="-1"><a class="header-anchor" href="#日主" aria-hidden="true">#</a> 日主</h3><p>取得日主，即日柱的天干，返回天干对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Stem<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四柱列表" tabindex="-1"><a class="header-anchor" href="#四柱列表" aria-hidden="true">#</a> 四柱列表</h3><p>取得四柱列表</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>[Pillar, Pillar, Pillar, Pillar]<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="胎元" tabindex="-1"><a class="header-anchor" href="#胎元" aria-hidden="true">#</a> 胎元</h3>`,17),b=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>SB<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span><span class="token function">embryo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命宫" tabindex="-1"><a class="header-anchor" href="#命宫" aria-hidden="true">#</a> 命宫</h3><p>取得命宫, 返回一个SB实例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>SB<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span><span class="token function">ownSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="身宫" tabindex="-1"><a class="header-anchor" href="#身宫" aria-hidden="true">#</a> 身宫</h3><p>取得身宫, 返回一个SB实例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>SB<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span><span class="token function">bodySign</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性别" tabindex="-1"><a class="header-anchor" href="#性别" aria-hidden="true">#</a> 性别</h3><p>取得性别字符串，如&#39;乾造&#39; 或 &#39;坤造&#39;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>sex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取得性别值，返回 0 或 1， 0为&#39;坤造&#39;， 1为&#39;乾造&#39;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>sexValue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空亡地支" tabindex="-1"><a class="header-anchor" href="#空亡地支" aria-hidden="true">#</a> 空亡地支</h3>`,13),g=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>[Branch, Branch]<span class="token punctuation">}</span>
 */</span>
c8<span class="token punctuation">.</span>missing

<span class="token comment">// 其相当于</span>
c8<span class="token punctuation">.</span>day<span class="token punctuation">.</span>missing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取天干和地支" tabindex="-1"><a class="header-anchor" href="#取天干和地支" aria-hidden="true">#</a> 取天干和地支</h2>`,2),x=s("strong",null,"Pillar",-1),y=s("strong",null,"Pillar",-1),f=s("strong",null,"SB",-1),_=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 例如，从年柱取得 Pillar实例</span>
<span class="token keyword">const</span> pillar <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">char8ex</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>year
<span class="token comment">// 取天干</span>
pillar<span class="token punctuation">.</span>stem
<span class="token comment">// 取地支</span>
pillar<span class="token punctuation">.</span>branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十神" tabindex="-1"><a class="header-anchor" href="#十神" aria-hidden="true">#</a> 十神</h2><h3 id="天干十神" tabindex="-1"><a class="header-anchor" href="#天干十神" aria-hidden="true">#</a> 天干十神</h3><p>可从四柱实例上取得天干十神，返回一个TenGod实例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>TenGod<span class="token punctuation">}</span>
 */</span>
pillar<span class="token punctuation">.</span>stemTenGod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="地支十神" tabindex="-1"><a class="header-anchor" href="#地支十神" aria-hidden="true">#</a> 地支十神</h3>`,6),w=s("strong",null,"TenGod",-1),G=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>TenGod[]<span class="token punctuation">}</span>
 */</span>
pillar<span class="token punctuation">.</span>branchTenGod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四柱神煞" tabindex="-1"><a class="header-anchor" href="#四柱神煞" aria-hidden="true">#</a> 四柱神煞</h3>`,2),B=s("strong",null,"Pillar",-1),S=s("strong",null,"C8God",-1),T=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>C8God[]<span class="token punctuation">}</span>
 */</span>
pillar<span class="token punctuation">.</span>gods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function P(C,E){const a=l("RouterLink");return i(),o("div",null,[d,s("p",null,[n("使用"),r,n("创建一个"),e(a,{to:"/api/char8ex.html"},{default:t(()=>[m]),_:1}),n("实例")]),k,s("p",null,[n("取得年柱， 返回一个四柱对象 "),e(a,{to:"/api/pillar.html"},{default:t(()=>[v]),_:1})]),h,s("p",null,[n("取得胎元, 返回一个"),e(a,{to:"/api/sb.html"},{default:t(()=>[n("SB")]),_:1}),n("实例")]),b,s("p",null,[n("空亡地支, 返回元组 ["),e(a,{to:"/api/branch.html"},{default:t(()=>[n("Branch")]),_:1}),n(", Branch]")]),g,s("p",null,[n("上述年月日时四柱返回的四柱实例对象: "),e(a,{to:"/api/pillar.html"},{default:t(()=>[x]),_:1})]),s("p",null,[y,n("包含了"),e(a,{to:"/api/sb.html"},{default:t(()=>[f]),_:1}),n("类的所有原型方法，天干地支的相关用法，可以参考SB类的用法，这处不详细论述")]),_,s("p",null,[n("取得地支十神, 因为是按地支藏干算的, 所以返回"),e(a,{to:"/api/tenGod.html"},{default:t(()=>[w]),_:1}),n("实例列表")]),G,s("p",null,[n("四柱对象"),e(a,{to:"/api/pillar.html"},{default:t(()=>[B]),_:1}),n("上包含一个gods属性，可取得该柱所有神煞，返回 "),e(a,{to:"/api/c8God.html"},{default:t(()=>[S]),_:1}),n("实例列表")]),T])}const L=p(u,[["render",P],["__file","char8ex.html.vue"]]);export{L as default};