<template>
  <div>
    <header>
      <h1><img class="title" src="~/assets/images/title.png" alt="スーパーマリオ64完全攻略サイト" /></h1>
      <Menu />
    </header>
    <main>
      <adsbygoogle :ad-slot="'\'' + GOOGLE_ADSENSE_SLOT + '\''" :ad-style="{ display: 'block' }" :ad-format="'auto'" />
      <section>
        <h2>コントローラーの持ち方</h2>
        <div class="contents">
          <div class="text">
            <p>
              このゲームでは左の十字キーとLボタンは使用しません。<br />
              そのため左手でコントローラーの真ん中の突起を、右手で右側の突起を持つ形が基本となります。
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>移動</h2>
        <div class="contents">
          <div class="text">
            <p>
              真ん中の3Dスティックを進みたい方向へ倒すことで移動できます。<br />
              移動速度には3Dスティックを倒す深さで3段階ありますが、基本的にダッシュで構いません。<br />
              まれに敵に気づかれないように近づく必要があるため、忍び足を使う場合があります。
            </p>
            <video src="/captures/control_01.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>ジャンプ</h2>
        <div class="contents">
          <div class="subsection">
            <h3>ジャンプの高さ調節</h3>
            <div class="contents">
              <div class="text">
                <p>ジャンプはAボタンでできます。押す長さで高さが変わります。</p>
                <video src="/captures/control_02.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>３段飛び</h3>
            <div class="contents">
              <div class="text">
                <p>
                  また移動しながら勢いをつけて連続でジャンプすることで高さが3段階変化します。<br />
                  Aボタンを押すタイミングは着地する瞬間です。<br />
                  また、3段目のジャンプは前進の勢いが足りないと発動しません。
                </p>
                <video src="/captures/control_03.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>反転横跳び</h3>
            <div class="contents">
              <div class="text">
                <p>
                  ある程度勢いがあるときに3Dスティックを進行方向とは逆に倒した瞬間に<br />
                  Aボタンを押すことで反転横跳びをすることができます。<br />
                  瞬間といっても発動猶予は広く簡単に出せて高さも通常ジャンプよりも高いためよく使います。
                </p>
                <video src="/captures/control_04.mp4" controls></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>攻撃</h2>
        <div class="contents">
          <div class="subsection">
            <h3>パンチ</h3>
            <div class="contents">
              <div class="text">
                <p>
                  Bボタンを1回押すと右フック、2回目で左フック、3回目でキックが出ます。<br />
                  クリボーなどの敵を殴り飛ばしたりできます。
                </p>
                <video src="/captures/control_05.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>ジャンプ攻撃</h3>
            <div class="contents">
              <div class="text">
                <p>ジャンプ中など空中にいるときにBボタンを押すことでキックを出すことができます。</p>
                <video src="/captures/control_06.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>飛び込み</h3>
            <div class="contents">
              <div class="text">
                <p>
                  勢いをつけた状態でBボタンを押すと飛び込みを行うことができます。<br />
                  ジャンプ中などでも前方への勢いがあれば飛び込みができます。<br />
                  これには攻撃判定があり、クリボーなどの敵は吹っ飛ばすことができます。<br />
                  また、腹滑りしている最中にAボタンを押すことで起き上がりを短縮できます。<br />
                  映像で最後に1回転しているのがこの操作を行った結果です。
                </p>
                <video src="/captures/control_07.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>ヒップドロップ</h3>
            <div class="contents">
              <div class="text">
                <p>
                  ジャンプ中など空中にいるときにZボタンを押すことでヒップドロップを行うことができます。<br />
                  ヒップドロップはどれだけ勢いがあっても行ったその場から垂直に落下するため、<br />
                  着地点をきめる場合に使われたり、ヒップドロップでしか倒せない敵も数多くいるため<br />
                  使う機会が非常に多いです。
                </p>
                <video src="/captures/control_14.mp4" controls></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>しゃがみ派生</h2>
        <div class="contents">
          <div class="subsection">
            <h3>しゃがむ</h3>
            <div class="contents">
              <div class="text">
                <p>
                  コントローラー裏側のZボタンを押すことでしゃがむことができます。<br />
                  しゃがんだからといって敵の攻撃が効かないわけでもなくしゃがみ単体で使うことは<br />
                  ほとんどありません。しゃがみ状態から他のボタンを押すことで様々なアクションを<br />
                  行うことができます。
                </p>
                <video src="/captures/control_08.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>ほふく前進</h3>
            <div class="contents">
              <div class="text">
                <p>しゃがみ状態のまま3Dスティックを倒すことでほふく前進をすることができます。</p>
                <video src="/captures/control_09.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>バック飛び</h3>
            <div class="contents">
              <div class="text">
                <p>
                  しゃがみ状態のときにAボタンを押すことでバック飛びをすることができます。<br />
                  反転横跳びや３段ジャンプの２段目よりも飛距離が高く、また角度を正確に<br />
                  決めやすいため、確実に高所に行かなければいけないよな状況で使います。
                </p>
                <video src="/captures/control_10.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>走り幅跳び</h3>
            <div class="contents">
              <div class="text">
                <p>
                  走って勢いをつけてる最中にZボタンでしゃがんだ瞬間にAボタンを押すことで<br />
                  幅跳びを行うことができます。<br />
                  高さはあまりないですが飛距離が大きいため落とし穴を越える際などによく使います。<br />
                  また、移動速度が速くなるため移動目的にもよく使います。
                </p>
                <video src="/captures/control_11.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>ブレイクダンス</h3>
            <div class="contents">
              <div class="text">
                <p>
                  しゃがみ状態のときにBボタンを押すことでブレイクダンスを行うことができます。<br />
                  ブレイクダンス中は攻撃判定があり、クリボーなどを吹っ飛ばすことができます。<br />
                  攻撃範囲が狭く、その場にとどまる必要があるためほとんど使われません。
                </p>
                <video src="/captures/control_12.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>スライディング</h3>
            <div class="contents">
              <div class="text">
                <p>
                  走って勢いがついているときにZボタンでしゃがんだ瞬間にBボタンを押すと<br />
                  スライディングをすることができます。<br />
                  攻撃判定がありクリボーなどの敵を吹っ飛ばすことができます。<br />
                  使う機会はほとんどないですが、坂道を滑り始めるときなどに使います。<br />
                  また腹滑り中と同様にスライディング中にAボタンを押すことで<br />
                  起き上がりを短縮できます。
                </p>
                <video src="/captures/control_13.mp4" controls></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>カメラ操作</h2>
        <div class="contents">
          <div class="subsection">
            <h3>ジュゲム視点・マリオ視点切り替え</h3>
            <div class="contents">
              <div class="text">
                <p>
                  Rボタンを押すことでジュゲム視点とマリオ視点を切り替えることができます<br />
                  このゲームでは序盤、ピーチ城に入る段階でジュゲムから説明がありますが<br />
                  プレイヤーのみる画面はジュゲムのカメラで撮影しているという設定となっております。<br />
                  マリオ視点はマリオのすぐ背後に張り付いたようなカメラの動きをします。<br />
                  基本的にマリオ視点を使うことは全くないです。
                </p>
                <video src="/captures/control_15.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>カメラ左右移動</h3>
            <div class="contents">
              <div class="text">
                <p>
                  右十字ボタンのうち右と左はジュゲムを左右に移動させる、つまりカメラ視点を<br />
                  左右に移動させることができます。<br />
                  移動させた後カメラはマリオの真後ろに移動しようとします。
                </p>
                <video src="/captures/control_16.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>カメラ引き・定点カメラ</h3>
            <div class="contents">
              <div class="text">
                <p>
                  右十字ボタンのうち下を押すと引きカメラになります。<br />
                  また上を押すと固定カメラになります。<br />
                  このとき3Dスティックでカメラ移動できますがマリオは移動することができません。<br />
                  定点状態は右十字ボタンのうち上を押すかBボタン・Aボタンで解除できます。
                </p>
                <video src="/captures/control_17.mp4" controls></video>
                <p>
                  またステージに入っているときのみジュゲムを待機させることもできます。<br />
                  コントローラー中央のSTARTボタンを押し、以下の映像のようにメニューから設定することで<br />
                  マリオ視点から切り替えて定点カメラにすることができます。
                </p>
                <video src="/captures/control_18.mp4" controls></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>木登り</h2>
        <div class="contents">
          <div class="subsection">
            <h3>木に掴まる</h3>
            <div class="contents">
              <div class="text">
                <p>ジャンプや幅跳びで木や棒に突っ込むことで木をつかむことができます。</p>
                <video src="/captures/control_19.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>上下移動</h3>
            <div class="contents">
              <div class="text">
                <p>
                  木や棒に掴まった状態で3Dスティックを上や下に倒すことで上下移動することができます。<br />
                  また、先端まで登ったあとに再度3Dスティックを上に倒すことで逆立ちします。<br />
                  映像最後の部分がその操作を行った結果です。
                </p>
                <video src="/captures/control_20.mp4" controls></video>
              </div>
            </div>
          </div>
          <div class="subsection">
            <h3>ジャンプ</h3>
            <div class="contents">
              <div class="text">
                <p>
                  木に掴まった状態で3Dスティックを横に倒すことで左右移動することができます。<br />
                  また木に掴まった状態でAボタンを押すことでジャンプすることができます。<br />
                  ジャンプする方向はマリオの背中の方向となります。<br />
                  先端で逆立ちした状態であれば背中の向きは逆となるため逆にジャンプします。
                </p>
                <video src="/captures/control_21.mp4" controls></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>水中操作</h2>
        <div class="contents">
          <div class="text">
            <p>
              3Dスティックで方向転換しながらAボタンを連打することで水中移動することができます。<br />
              Aボタン連打は素早ければいいものではなく、マリオの動きとリズムに合わせて押下しましょう。<br />
              細かい移動をする場合はAボタンを押しっぱなしにすることでバタ足ができます。<br />
              また水中にいる間は体力が徐々に減っていき、水面で回復することができます。<br />
              これを利用して敵や落下ダメージなどで体力が減っているときに水中に入って水面に上ることで<br />
              全回復することができます。<br />
              またBボタンを押すことで水中のアイテム(亀のコウラ)を取得することができます。
            </p>
            <video src="/captures/control_22.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>壁キック</h2>
        <div class="contents">
          <div class="text">
            <p>
              ジャンプ後など勢いがある状態で壁に衝突した瞬間にAボタンを押すことで<br />
              壁を蹴り反対方向により高くジャンプすることができる。<br />
              タイミングが非常にシビアではあるが攻略に必須なアクションであるためマスターしておきたい。
            </p>
            <video src="/captures/control_23.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>坂での操作</h2>
        <div class="contents">
          <div class="text">
            <p>
              坂で滑っているときの状態は、腹滑り、尻滑り、スライディングの３つあります。<br />
              尻滑り、スライディングで滑っているときはジャンプすることができますが<br />
              腹滑りのときは方向調整以外の操作はできません。<br />
              コイン集めのときなど滑り途中でジャンプする必要があるときは尻滑り、スライディング<br />
              の状態で滑り始めるようにしましょう。
            </p>
            <video src="/captures/control_24.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>看板を読む・話しかける</h2>
        <div class="contents">
          <div class="text">
            <p>看板を読んだりキノピオなどに話しかけるには近づきBボタンを押します。</p>
            <video src="/captures/control_25.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>大砲</h2>
        <div class="contents">
          <div class="text">
            <p>
              ピンクボム兵に話しかけることで大砲に乗ることができます。<br />
              乗ったあと3Dスティックで照準を操作しAボタンで発射します。<br />
              発射のキャンセルはできません。
            </p>
            <video src="/captures/control_26.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>羽マリオ</h2>
        <div class="contents">
          <div class="text">
            <p>
              羽帽子を手に入れることで羽マリオとなり空を飛ぶことができます。<br />
              大砲で吹っ飛ぶか３段ジャンプの３段目で飛行開始します。<br />
              このとき３段ジャンプは前方への勢いは必要なく、その場ジャンプでも飛行可能です。<br />
              また飛行中、下降することでスピードが増し、一定以上のスピードがでた後<br />
              下方向に3Dスティックを倒し上昇するとブーストがかかります。<br />
              基本的に下降した分しか上昇できません。
            </p>
            <video src="/captures/control_27.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>コウラ</h2>
        <div class="contents">
          <div class="text">
            <p>
              ノコノコを攻撃したと落とすコウラに乗ることができます。<br />
              水や溶岩の上も走行することができます。<br />
              3Dスティックで移動し、Aボタンでジャンプ、Zボタンでキャンセルすることができます。
            </p>
            <video src="/captures/control_28.mp4" controls></video>
            <p>
              また水中のコウラは近づきBボタンで取得します。<br />
              ジャンプなどはできません。キャンセルはBボタンです。
            </p>
            <video src="/captures/control_29.mp4" controls></video>
          </div>
        </div>
      </section>
      <section>
        <h2>ぶら下がり</h2>
        <div class="contents">
          <div class="text">
            <p>
              ステージのなかには金網にぶら下がって移動する場合があります。<br />
              ぶら下がりはジャンプしたままAボタンを押しっぱなしにすることでできます。<br />
              移動もAボタンを押しっぱなしにしたまま3Dスティックで操作し、<br />
              Aボタンを離すとマリオも手を放します。
            </p>
            <video src="/captures/control_30.mp4" controls></video>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      GOOGLE_ADSENSE_SLOT: process.env.GOOGLE_ADSENSE_SLOT,
    }
  },
})
</script>

<style lang="sass" scoped>
video
  width: 800px
  height: 600px
</style>
