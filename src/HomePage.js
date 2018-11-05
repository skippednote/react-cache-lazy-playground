import React, { Suspense, useRef, useState, useEffect } from 'react';
import { unstable_createResource } from 'react-cache';
import Loading from './Loading';

const IntersectedResource = unstable_createResource(src => {
  return fetch(src).then(r => r.text());
});

const IntersectedImage = ({ target, src }) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting !== intersecting) {
        setIntersecting(entry.isIntersecting);
      }
    });

    io.observe(target.current);

    return () => {
      if (target.current) {
        io.unobserve(target.current);
      }
    };
  }, []);

  if (intersecting) {
    const svg = IntersectedResource.read(src);
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  }
  return null;
};

const HomePage = () => {
  const logoRef = useRef();

  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
        cupiditate necessitatibus accusantium nulla in optio commodi dicta
        illum. Commodi, a laborum laboriosam animi quo doloribus fugit dolore
        quaerat explicabo libero.
      </p>
      <p>
        Enim, veritatis atque laudantium inventore asperiores tempora dolores
        fugit voluptatem deleniti a reprehenderit aspernatur, quasi optio quo
        porro officia neque voluptatibus qui? Aliquam ipsum quo unde sit? Aut,
        saepe accusantium?
      </p>
      <p>
        Iure esse ipsa quasi, molestias dolor recusandae nulla odit laudantium.
        Maxime totam reprehenderit tenetur voluptates reiciendis, ex architecto
        eum voluptas atque velit blanditiis laboriosam ab, rerum saepe, natus
        debitis dolore!
      </p>
      <p>
        Aliquid accusantium necessitatibus totam voluptate quisquam placeat fuga
        similique voluptatum maiores ab, dolor eum corrupti omnis recusandae
        quaerat nostrum praesentium, sed nisi et cumque architecto!
        Necessitatibus quos est quibusdam molestiae!
      </p>
      <p>
        Maiores minima, eaque molestiae impedit ut labore numquam aut itaque
        dolor quo, iure, odio voluptatem quae tempore vel. Modi iure autem
        aspernatur minima eveniet dicta, soluta commodi libero ipsa corporis?
      </p>
      <p>
        Quos quo, ratione harum modi iusto quod possimus atque id non assumenda
        animi deleniti ullam odit fugit aliquid dolorum repellat alias incidunt
        sit eum? Dolore repellat unde nisi et fugiat!
      </p>
      <p>
        Reprehenderit officiis dolor qui a dolore tenetur, cum sapiente,
        voluptatum deleniti necessitatibus vel quidem voluptas blanditiis vero
        at dicta quas, obcaecati tempore excepturi nihil. Voluptate earum
        explicabo minima quibusdam mollitia.
      </p>
      <p>
        Perferendis odit quo ea provident quisquam illum, a nulla nam minima
        nobis quaerat sequi ullam expedita in repellendus cupiditate
        perspiciatis molestiae temporibus debitis! Minima commodi voluptatem
        sunt cupiditate magnam ut?
      </p>
      <p>
        Similique asperiores minima cum! A repellat nesciunt quasi facilis enim
        quia ducimus omnis corporis, vitae ipsa! Corrupti saepe suscipit non
        cumque quas tenetur beatae aspernatur nemo nisi delectus? Tempora,
        minima.
      </p>
      <p>
        Dolorum atque aperiam maxime odio nisi. Sint, nam veritatis ratione
        dicta sapiente magni adipisci optio natus perspiciatis? Minima aperiam
        dolore repellat voluptates, officia saepe dignissimos quasi quia, nemo,
        minus alias.
      </p>
      <p>
        Dolorem cumque fugiat reiciendis in porro odit sed non nobis quas,
        doloribus tenetur ipsa sapiente commodi nemo incidunt debitis
        voluptatibus! Laudantium porro placeat, natus illum autem iusto
        consequuntur explicabo dignissimos.
      </p>
      <p>
        Aliquam deleniti explicabo eveniet sit inventore? Quod consectetur
        soluta exercitationem officia delectus accusamus ratione libero deserunt
        mollitia aliquid minus vero alias nesciunt corrupti, non quaerat nostrum
        nobis eius sed fugiat!
      </p>
      <p>
        Accusantium alias, aut porro ratione ab explicabo molestias, sint nisi
        repudiandae recusandae sequi quos voluptas reprehenderit, expedita
        obcaecati praesentium laboriosam hic consequuntur at odit. Atque
        obcaecati et provident ex voluptatibus.
      </p>
      <p>
        Tenetur voluptatum ab vero eum sequi, possimus, aspernatur libero odit
        similique officia consequuntur? Impedit nemo recusandae architecto
        explicabo aspernatur iste at, voluptatibus perspiciatis maiores, fugit
        tempora sunt quaerat soluta. Corporis.
      </p>
      <p>
        Ad tempora nam cumque temporibus, eum nisi at voluptatibus quos
        molestias placeat vel nemo consequuntur totam aliquid animi tempore
        quidem. Voluptas laborum quaerat dolor culpa voluptatum a consequatur
        quibusdam dolore?
      </p>
      <p>
        Consequatur a facere debitis, itaque nostrum atque doloribus. Commodi,
        quibusdam. Nisi nulla quidem quae repellendus minima tenetur, dolorem
        labore unde! Porro repellat nesciunt quibusdam officiis voluptates. Sunt
        natus sed perspiciatis?
      </p>
      <p>
        Fuga corrupti voluptatum impedit provident, alias, libero ullam,
        laboriosam qui aspernatur excepturi odit ipsam dolor? Dicta vitae a,
        similique accusamus ullam blanditiis aliquam aspernatur adipisci vel
        asperiores quae accusantium minus.
      </p>

      <div ref={logoRef} className="container">
        <Suspense fallback={<Loading />}>
          <IntersectedImage src="./logo.svg" target={logoRef} />
        </Suspense>
      </div>
      <p>
        Non deserunt fugiat modi optio dolores aperiam consequuntur explicabo
        eos doloremque provident. Rem fugit adipisci sunt doloremque, in fugiat
        et repellat alias, saepe unde ullam ad quam quis voluptas tenetur!
      </p>
      <p>
        Dignissimos obcaecati, iusto autem quis odit ut consectetur nostrum
        voluptatum fugiat, adipisci recusandae debitis pariatur nobis repellat
        placeat, fugit aut excepturi. Ex maxime soluta in quia, atque cum
        provident eum!
      </p>
      <p>
        Obcaecati suscipit iure impedit recusandae voluptate debitis deserunt,
        delectus neque dolores eum excepturi fuga! Voluptatum amet iusto nam
        nesciunt earum voluptate ipsam magnam, sapiente ipsum dolore,
        dignissimos, alias minus dolorum!
      </p>
    </div>
  );
};
export default HomePage;
