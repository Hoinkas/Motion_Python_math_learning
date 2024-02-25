import {Latex, makeScene2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core/lib/utils';
import {
  CodeBlock, lines, word,
} from '@motion-canvas/2d/lib/components/CodeBlock';
import {Rect, Txt} from '@motion-canvas/2d/lib/components';
import {all, delay, waitFor} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const code = createRef<CodeBlock>();
  const tex = createRef<Latex>();
  const text = createRef<Txt>();
  const rect = createRef<Rect>();
  view.fill('#141414');

  const python_code = `def ln(x, limit = 1000):
  #Return NaN for non-positive values
  if x <= 0:
      return float('nan')
  
  result = 0.0

  for n in range(1, limit + 1):
      coefficient = (-1) ** (n - 1)
      result += coefficient * ((x - 1) ** n) / n

  return result`
  const txt = 'Taylor series for ln(x)';

  view.add(
    <Rect
      x={1920/4 + 100}
    >
      <Txt
        ref={text}
        fontSize={32}
        fontFamily={'JetBrains Mono'}
        text={txt}
        fill={'#f0f0f0'}
        y={-120}
      />
      <Rect
        ref={rect}
      >
        <Latex
          ref={tex}
          width={650}
          tex="{\color{white} 
          ln\left(x\right) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{(x - 1)^{n}}{n}\
          }"
        />,
      </Rect>
    </Rect>);

  view.add(
    <CodeBlock
      language='python'
      ref={code}
      fontSize={40}
      width={1920/2}
      x={-1920/5}
      y={30}

      fontFamily={'JetBrains Mono'}
      code={() => python_code}
    />
  );

  yield* all (
    waitFor(2),
    tex().opacity(0.2, 0.2),
    text().opacity(0.2, 0.2),
    code().opacity(0.2, 0.2),
  );

  tex().remove();
  const newLatex = <Latex
    ref={tex}
    width={650}
    tex="{\color{white} 
    ln\left(x\right)\color{#35383C} = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex);

  yield* all (
    waitFor(2),
    code().opacity(1, 0.2),
    code().selection(lines(0), 0.2),
  );

  newLatex.remove();
  const newLatex2 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(\color{white}x\color{#35383C}\right) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex2);

  
  yield* all (
    waitFor(2),
    code().selection(word(0, 7, 1), 0.2),
    waitFor(2),
  );

  newLatex2.remove();
  const newLatex3 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \sum_{n=1}^{\color{white}\infty} \color{#35383C}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex3);

  
  yield* all (
    waitFor(2),
    code().selection(word(0, 10, 12), 0.2),
    waitFor(2),
  );

  newLatex3.remove();
  const newLatex4 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \color{white}\sum_{n=1}^{\infty}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex4);

  
  yield* all (
    waitFor(2),
    code().selection(lines(7, 9), 0.2),
    waitFor(2),
  );

  newLatex4.remove();
  const newLatex5 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \color{white}\sum_{n=1}^{\infty}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex5);

  
  yield* all (
    waitFor(2),
    code().selection(lines(7, 9), 0.2),
    waitFor(2),
  );

  newLatex5.remove();
  const newLatex6 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \sum_{\color{white}n=1}^{\color{white}\infty}\color{#35383C}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex6);

  
  yield* all (
    waitFor(2),
    code().selection(lines(7), 0.2),
    waitFor(2),
  );

  newLatex6.remove();
  const newLatex7 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \sum_{\color{white}n=1}^{\infty}\color{#35383C}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex7);

  
  yield* all (
    waitFor(2),
    code().selection(word(7, 17, 1), 0.2),
    waitFor(2),
  );

  newLatex7.remove();
  const newLatex8 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \sum_{n=1}^{\color{white}\infty}\color{#35383C}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex8);

  
  yield* all (
    waitFor(2),
    code().selection([...word(7, 20, 9), ...word(0, 10, 6)], 0.2),
    waitFor(2),
  );

  newLatex8.remove();
  const newLatex9 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \sum_{n=1}^{\infty}\color{white}(-1)^{n-1} \color{#35383C}\frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex9);

  
  yield* all (
    waitFor(2),
    code().selection(lines(8), 0.2),
    waitFor(2),
  );

  newLatex9.remove();
  const newLatex10 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \sum_{n=1}^{\infty}(-1)^{n-1} \color{white}\frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex10);

  
  yield* all (
    waitFor(2),
    code().selection(word(9, 30), 0.2),
    waitFor(2),
  );

  newLatex10.remove();
  const newLatex11 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \sum_{n=1}^{\infty}\color{white}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex11);

  
  yield* all (
    waitFor(2),
    code().selection(word(9, 15), 0.2),
    waitFor(2),
  );

  newLatex11.remove();
  const newLatex12 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \color{white}\sum_{n=1}^{\infty}\color{#35383C}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex12);

  
  yield* all (
    waitFor(2),
    code().selection(word(9, 5, 10), 0.2),
    waitFor(2),
  );

  newLatex12.remove();
  const newLatex13 = <Latex
    ref={tex}
    width={650}
    tex="{\color{#35383C}
    ln\left(x\right) = \color{white}\sum_{n=1}^{\infty}(-1)^{n-1} \frac{(x - 1)^{n}}{n}\
    }"
  />
  rect().add(newLatex13);

  
  yield* all (
    waitFor(2),
    code().selection(lines(7,9), 0.2),
    waitFor(4),
  );  
});