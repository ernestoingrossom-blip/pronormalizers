const tex=(strings,...values)=>String.raw(strings,...values).replace(/\`/g,'`').replace(/\\\$\\{/g,'${');

const bibliography = {
  perReferee3:{author:'M. Brescia -- M. Ferrara -- M. Trombetti',title:'Groups whose subgroups are either abelian or pronormal',journal:'Kyoto J. Math.',volume:'63',number:'3',pages:'471--500',year:'2023',doi:'',url:''},
  capelliargument:{author:'M. Brescia -- F. de Giovanni -- M. Trombetti',title:"The true story behind Frattini's Argument",journal:'Adv. Group Theory Appl.',volume:'3',number:'',pages:'117--129',year:'2017',doi:'',url:''},
  perReferee5:{author:'M. Brescia -- M. Trombetti',title:'Locally finite simple groups whose non-abelian subgroups are pronormal',journal:'Comm. Algebra',volume:'51',number:'8',pages:'3346--3353',year:'2023',doi:'',url:''},
  perReferee:{author:'M. De Falco -- F. de Giovanni -- C. Musella',title:'Pronormality in uncountable groups',journal:'Comm. Algebra',volume:'53',number:'2',pages:'901--908',year:'2025',doi:'',url:''},
  Doerk:{author:'K. Doerk -- H. O. Hawkes',title:'Finite Soluble Groups',journal:'De Gruyter Expositions in Mathematics',volume:'4',number:'',pages:'',year:'1992',doi:'',url:''},
  perReferee2:{author:'M. Ferrara -- M. Trombetti',title:'Groups with many pronormal subgroups',journal:'Bull. Aust. Math. Soc.',volume:'105',number:'1',pages:'75--86',year:'2022',doi:'',url:''},
  perReferee4:{author:'M. Ferrara -- M. Trombetti',title:'Locally finite simple groups whose nonnilpotent subgroups are pronormal',journal:'Bull. Aust. Math. Soc.',volume:'109',number:'3',pages:'512--521',year:'2024',doi:'',url:''},
  forster:{author:'P. Förster',title:'Pronormal subgroups and homomorphs in finite groups',journal:'Israel J. Math.',volume:'55',number:'1',pages:'94--108',year:'1986',doi:'',url:''},
  dGTPro:{author:'F. de Giovanni -- M. Trombetti',title:'Pronormality in group theory',journal:'Adv. Group Theory Appl.',volume:'9',number:'',pages:'123--149',year:'2020',doi:'',url:''},
  pQdM:{author:'F. de Giovanni -- G. Vincenzi',title:'Pronormality in infinite groups',journal:'Math. Proc. R. Ir. Acad.',volume:'100A',number:'2',pages:'189--203',year:'2000',doi:'',url:''},
  QdM:{author:'F. de Giovanni -- G. Vincenzi',title:'Some topics in the theory of pronormal subgroups of groups',journal:'Quaderni Mat.',volume:'8',number:'',pages:'175--202',year:'2001',doi:'',url:''},
  maslova:{author:'A. S. Kondrat’ev -- N. V. Maslova -- D. O. Revin',title:'On pronormal subgroups in finite simple groups',journal:'Dokl. Math.',volume:'98',number:'2',pages:'405--408',year:'2018',doi:'',url:''},
  kurda:{author:'L. A. Kurdachenko -- I. Ya. Subbotin',title:'The influence of arrangement of subgroups on the group structure',journal:'Note Mat.',volume:'36',number:'',pages:'51--63',year:'2016',doi:'',url:''},
  KS:{author:'N. F. Kuzennyi -- I. Ya. Subbotin',title:'Groups in which all subgroups are pronormal',journal:'Ukr. Mat. Zh.',volume:'39',number:'3',pages:'325--329',year:'1987',doi:'',url:''},
  Navarro:{author:'G. Navarro',title:'Pronormal subgroups and zeros of characters',journal:'Proc. Amer. Math. Soc.',volume:'142',number:'9',pages:'3003--3005',year:'2014',doi:'',url:''},
  peng2:{author:'T. A. Peng',title:'Finite groups with pro-normal subgroups',journal:'Proc. Amer. Math. Soc.',volume:'20',number:'',pages:'232--234',year:'1969',doi:'',url:''},
  peng:{author:'T. A. Peng',title:'Pronormality in finite groups',journal:'J. London Math. Soc. (2)',volume:'3',number:'',pages:'301--306',year:'1971',doi:'',url:''},
  Rose:{author:'J. S. Rose',title:'Finite soluble groups with pronormal system normalizers',journal:'Proc. London Math. Soc.',volume:'3',number:'',pages:'447--469',year:'1967',doi:'',url:''},
  Thomp:{author:'J. G. Thompson',title:'Nonsolvable finite groups all of whose local subgroups are solvable',journal:'Pacific J. Math.',volume:'33',number:'',pages:'451--536',year:'1970',doi:'',url:''},
  yen:{author:'T. Yen',title:'Permutable pronormal subgroups',journal:'Proc. Amer. Math. Soc.',volume:'34',number:'',pages:'340--342',year:'1972',doi:'',url:''},
  wood:{author:'G. J. Wood',title:'On pronormal subgroups of finite soluble groups',journal:'Arch. Math. (Basel)',volume:'25',number:'',pages:'578--585',year:'1974',doi:'',url:''}
};
const bibliographyKeys = Object.keys(bibliography);

const islands = [
{
 id:'origins', number:'01', short:'Background', title:'Background', subtitle:'Motivation for pronormalizers', ref:'Poster · Background', tag:'Context',
 formula:tex`Localization of Pronormality`,
 content:tex`\begin{lead}
Philip Hall introduced pronormality to identify the subgroup property that makes the Capelli--Frattini argument work.
\end{lead}

Let $G$ be a group. A subgroup $H$ of $G$ is said to be \emph{pronormal} in $G$ if, for every $g \in G$, the subgroups $H$ and $H^g$ are conjugate within $\langle H, H^g \rangle$. Pronormal subgroups were introduced by Philip Hall in order to encode the Frattini Argument as a subgroup property; Sylow $p$-subgroups, maximal subgroups, and normal subgroups of finite groups are classical examples of pronormal subgroups. Since their introduction, pronormal subgroups have played a central role in group theory, providing a unifying framework for a variety of seemingly unrelated phenomena.

Motivated by the analogy “normal subgroups” $\Rightarrow$ “normalizer of a subgroup”, the aim of this paper is to introduce the notion of \emph{pronormalizer} of a subgroup and to develop its general theory. In contrast to the case of normalizers, a subgroup may have several distinct pronormalizers.

\begin{takeaway}
Pronormalizers can be viewed as a tool that localizes pronormality, and indeed many classical results on pronormal subgroups can be reformulated and extended in this broader setting.
\end{takeaway}`,
 next:'pronormality', bounties:[]
},
{
 id:'pronormality', number:'02', short:'Pronormality', title:'What does pronormal mean?', subtitle:'Conjugacy inside the smallest possible setting', ref:'Poster · Pronormality', tag:'Definition',
 formula:tex`$\forall g \in G,\ \exists u \in \langle H,H^g\rangle : H^u=H^g$`,
 content:tex`\begin{lead}
Pronormality is a conjugacy condition designed to capture the mechanism behind the Capelli-Frattini Argument. 
The key point is that a subgroup must be conjugate to each of its conjugates not merely somewhere in the ambient group, but already inside the subgroup generated by the two.
\end{lead}

\begin{definition}
Let $G$ be a group and let $H$ be a subgroup of $G$. 
We say that $H$ is \emph{pronormal} in $G$ if, for every $g\in G$, the subgroups $H$ and $H^g$ are conjugate in
\(\langle H,H^g\rangle.\)
Equivalently, for every $g\in G$, there exists
\(u\in\langle H,H^g\rangle\)
such that
\(H^u=H^g.\)
\end{definition}

Normal subgroups, maximal subgroups, and Sylow $p$-subgroups of finite groups are classical examples of pronormal subgroups.

The condition \(u\in\langle H,H^g\rangle\) is essential: it is not enough that $H$ and $H^g$ are conjugate in $G$. 
Pronormality requires the conjugation to be realized locally, inside the smallest natural subgroup containing both $H$ and $H^g$.

The concept of a pronormal subgroup was introduced by P.~Hall in his lectures at Cambridge. The importance of pronormal subgroups lies in the fact that they generalize properties shared by normal subgroups, maximal subgroups, and Sylow $p$-subgroups of finite groups. Indeed, these are classical examples of pronormal subgroups. The clause “inside $\langle H,H^g\rangle$” is decisive: it is not enough for $H$ and $H^g$ to be conjugate in $G$. The test requires the conjugation to be realized locally.

Since their introduction, pronormal subgroups have played a significant and enduring role in various areas of group theory (see \cite{perReferee3}, \cite{perReferee5}, \cite{perReferee}, \cite{perReferee2}, \cite{perReferee4}, \cite{forster}, \cite{dGTPro}, \cite{pQdM}, \cite{QdM}, \cite{maslova}, \cite{KS}, \cite{Navarro}, \cite{peng}, \cite{peng2}, \cite{yen}, \cite{wood}, among many others and the reference lists therein). For example, Navarro \cite{Navarro} proved that in a soluble finite group, the property of being normal can be characterized in terms of certain non-zero characters, provided that the subgroup under consideration is pronormal. On a different note, Peng \cite{peng2} proved that in a finite group all subgroups are pronormal if and only if normality is a transitive relation in every subgroup, i.e. if and only if the group is a so-called $\overline T$-group (this was later extended to arbitrary groups in \cite{KS}). In fact, an easy application of the Capelli--Frattini Argument yields that a pronormal subgroup which is subnormal (more generally, serial) is normal. In another interesting work, Peng \cite{peng} gave some characterizations of pronormality in terms of the subnormalizer. The range of properties and results concerning pronormal subgroups is so extensive that a complete account would be impossible here. We therefore refer the interested reader to the monograph \cite{Doerk} and to the introductions of some of the aforementioned papers (in particular, \cite{dGTPro} and \cite{QdM}).

\begin{takeaway}
Pronormal means globally stable under conjugacy, but with a witness constructed inside the subgroup generated by the pair $H$ and $H^g$.
\end{takeaway}`,
 next:'basic-results', bounties:[{src:'bounties/philip-hall.png',name:'Philip Hall',note:''}]
},
{
 id:'basic-results', number:'03', short:'Basic Results', title:'Pronormality - Basic Results', subtitle:'Examples and first properties', ref:'Poster · Basic Results', tag:'Tool',
 formula:tex`$H\le X\trianglelefteq G \Longrightarrow G=N_G(H)X$`,
 content:tex`\begin{lead}
Capelli--Frattini Argument via pronormal subgroups
\end{lead}

In 1885, Giovanni Frattini introduced to the world of group theory a very useful argument that can be applied, for instance, when a Sylow subgroup of a finite group is contained in a normal subgroup. This argument soon came to be known as the Frattini Argument, although the original idea is certainly due (as Frattini himself notes) to another Italian mathematician, Alfredo Capelli (see \cite{capelliargument}) --- in what follows, we shall refer to this argument as the Capelli--Frattini Argument. Building on the Capelli--Frattini Argument and aiming to identify the subgroup properties that make it work, Philip Hall introduced the following concept (although it first appeared in a paper of John Rose \cite{Rose}): a subgroup $H$ of a group $G$ is said to be pronormal if for every $g\in G$, there is $u\in\langle H,H^g\rangle$ such that $H^u=H^g$. Of course, normal subgroups and maximal subgroups of arbitrary groups are pronormal, as well as Sylow subgroups of finite groups and Hall subgroups of any finite soluble group.

The Capelli--Frattini Argument applies to pronormal subgroups, showing that they have the following property (which is in fact the core of the argument itself).

\begin{theorem}[Capelli--Frattini Property for pronormal subgroups]
Let $H$ be a pronormal subgroup of a group $G$. If $H$ is contained in a normal subgroup $X$ of $G$, then
\[
G=N_G(H)X.
\]
\end{theorem}

Although the Capelli--Frattini Property does not identify pronormal subgroups in arbitrary groups (in fact, $\operatorname{PSU}_3(3)$ contains a copy of the symmetric group $\operatorname{Sym}(4)$ of degree four which is not pronormal but for which the Capelli--Frattini Property holds in every intermediate subgroup; see for example \cite{maslova}), it has been proved by Peng \cite{peng} that pronormality was indeed the one and only concept that would have allowed the Capelli--Frattini Property to work in an arbitrary finite soluble group; this was later extended to infinite soluble (actually, hyper-$N$) groups in \cite{kurda}, Theorem 24.

\begin{lemma}
Let $G$ be a group and $H$ a subnormal subgroup of $G$. If $H$ is pronormal in $G$, then $H$ is normal in $G$.
\end{lemma}

This very easy remark allows us to construct examples of non-pronormal subgroups.`,
 next:'pronormalizers', bounties:[
  {src:'bounties/alfredo-capelli.png',name:'Alfredo Capelli',note:''},
  {src:'bounties/giovanni-frattini.png',name:'Giovanni Frattini',note:''}
 ]
},
{
 id:'pronormalizers', number:'04', short:'Pronormalizers', title:'The pronormalizer', subtitle:'A maximal container in which $H$ remains pronormal', ref:'Poster · Pronormalizers', tag:'Core concept',
 formula:tex`$R\in\mathcal{P}_G(H) \Longleftrightarrow R\text{ is maximal among the subgroups in which }H\text{ is pronormal}$`,
 content:tex`\begin{lead}
How to define the pronormalizer of a subgroup $H$ in a group $G$?
\end{lead}

The first idea is to define a “pronormalizer” in analogy with the normalizer in the case of normality.

\textbf{Normality.} Let $G$ be a group and let $H$ be a subgroup of $G$. We say that $x\in G$ normalizes $H$ if
\[
H^x=H.
\]
Thus
\[
\greenbox{N_G(H)=\{x\in G:x\text{ normalizes }H\}},
\]
and $N_G(H)$ is a subgroup of $G$, called the normalizer of $H$ in $G$.

\textbf{Pronormality.} Let $G$ be a group and let $H$ be a subgroup of $G$. We say that $x\in G$ pronormalizes $H$ if $H$ and $H^x$ are conjugate in
\[
\langle H,H^x\rangle.
\]
Accordingly,
\[
\redbox{P_G(H)=\{x\in G:x\text{ pronormalizes }H\}}.
\]
In general, $P_G(H)$ is not a subgroup of $G$.

Since $P_G(H)$ is not necessarily a subgroup of $G$, we are led to the following definition.

\begin{definition}
Let $G$ be a group and let $H$ be a subgroup of $G$. A subgroup $R$ of $G$ is called a \textcolor{red}{pronormalizer} of $H$ in $G$ if $R$ is maximal among the subgroups of $G$ containing $H$ as a \textcolor{blue}{pronormal} subgroup.
\end{definition}

\begin{takeaway}
The pronormalizer is the largest “local territory” in which $H$ retains pronormality; uniqueness of this territory becomes a strong property of the group.
\end{takeaway}`,
 next:'remarks', bounties:[
  {src:'bounties/mattia-brescia.png',name:'Mattia Brescia',note:''},
  {src:'bounties/marco-trombetti.png',name:'Marco Trombetti',note:''}
 ]
},
{
 id:'remarks', number:'05', short:'Remarks', title:'Remarks', subtitle:'Pronormalizers are not unique', ref:'Poster · Remarks', tag:'Remarks',
 formula:tex`$R\in\mathcal P_G(H)\Longrightarrow R\subseteq P_G(H)$`,
 content:tex`\begin{lead}
List of properties of pronormalizers
\end{lead}

\begin{itemize}
\item If $R$ is a pronormalizer of $H$ in $G$, then $R\subseteq P_G(H)$.
\item $H$ can have more than one \textcolor{red}{pronormalizer} in $G$.
\item If $P_G(H)$ is a subgroup of $G$, then $P_G(H)$ is the only \textcolor{red}{pronormalizer} of $H$ in $G$.
\end{itemize}

\textbf{Example.} Let $G=\operatorname{Sym}(4)$ and $H=\langle(1,2)\rangle$. Then $H$ has two non-isomorphic pronormalizers in $G$, namely
\[
R=\langle(1,2),(1,2,3)\rangle\simeq\operatorname{Sym}(3)
\]
and
\[
N=\langle(1,2),(1,2)(3,4)\rangle\simeq V_4.
\]
In particular, $P_G(H)$ is not a subgroup of $G$.

\begin{takeaway}
The converse of the uniqueness statement fails: $H$ may have a unique pronormalizer even when $P_G(H)$ is not a subgroup.
\end{takeaway}`,
 next:'seriality', bounties:[], figureHtml:`<figure class="detail-figure s4-figure">
  </figcaption>
  <svg viewBox="0 0 940 540" role="img" aria-label="Subgroup diagram in Sym(4)">
    <path class="edge" d="M470 85 L225 220"/><path class="edge" d="M470 85 L715 220"/>
    <path class="edge" d="M715 220 L590 355"/><path class="edge" d="M225 220 L470 455"/><path class="edge" d="M590 355 L470 455"/>
    <rect class="node" x="335" y="35" width="270" height="78" rx="16"/>
    <text x="470" y="68" text-anchor="middle">G = Sym(4)</text><text x="470" y="94" text-anchor="middle" class="tiny">ambient group</text>
    <rect class="node node-green" x="55" y="170" width="340" height="98" rx="16"/>
    <text x="225" y="202" text-anchor="middle">R = ⟨(1,2),(1,2,3)⟩</text><text x="225" y="231" text-anchor="middle" class="small">≅ Sym(3)</text><text x="225" y="253" text-anchor="middle" class="tiny">pronormalizer</text>
    <rect class="node" x="540" y="165" width="350" height="110" rx="16"/>
    <text x="715" y="195" text-anchor="middle" class="small">S = ⟨(1,2),(1,2)(3,4),</text><text x="715" y="220" text-anchor="middle" class="small">(1,3)(2,4)⟩ ≅ Dih(8)</text><text x="715" y="249" text-anchor="middle" class="tiny">intermediate subgroup</text>
    <rect class="node node-green" x="405" y="310" width="370" height="96" rx="16"/>
    <text x="590" y="341" text-anchor="middle">N = ⟨(1,2),(1,2)(3,4)⟩</text><text x="590" y="369" text-anchor="middle" class="small">≅ V₄</text><text x="590" y="392" text-anchor="middle" class="tiny">pronormalizer</text>
    <rect class="node node-red" x="325" y="420" width="290" height="78" rx="16"/>
    <text x="470" y="452" text-anchor="middle">H = ⟨(1,2)⟩</text><text x="470" y="478" text-anchor="middle" class="tiny">subgroup under study</text>
  </svg>
</figure>`
},
{
 id:'seriality', number:'06', short:'Basic Result', title:'Seriality and Pronormalizers', subtitle:'The normalizer controls pronormalizing elements', ref:'Poster · Basic Result', tag:'Structure',
 formula:tex`$H\text{ serial in }G\Longrightarrow P_G(H)=N_G(H)$`,
 content:tex`\begin{lead}
Seriality and pronormalizers
\end{lead}

\begin{definition}
Let $G$ be a group. A chain of subgroups $\mathcal S$ of $G$ such that for each pair of consecutive terms of $\mathcal S$ the previous one is normal in the next one is said to be a \emph{series} of $G$.
\end{definition}

\begin{itemize}
\item A subgroup $H$ of $G$ is said to be \textit{\textcolor{violet}{serial}} in $G$ if there exists a series between $H$ and $G$.
\item If $H$ is \textcolor{orange}{subnormal} in $G$, then $H$ is \textcolor{violet}{serial} in $G$.
\end{itemize}

\begin{proposition}
Let $G$ be a group and $H$ a subgroup of $G$. If $H$ is \textcolor{violet}{serial} in $G$, then
\[
\redbox{P_G(H)=N_G(H)}.
\]
\end{proposition}

If $H$ is \textcolor{blue}{pronormal} in $G$, then $G=P_G(H)$. Hence
\[
H\text{ pronormal in }G\quad+\quad H\text{ serial in }G\quad\Longrightarrow\quad H\trianglelefteq G.
\]

\begin{takeaway}
For serial subgroups, pronormalizing elements are exactly normalizing elements.
\end{takeaway}`,
 next:'capelli-frattini', bounties:[]
},
{
 id:'capelli-frattini', number:'07', short:'Capelli–Frattini', title:'Capelli–Frattini Argument', subtitle:'Pronormalizers and a normal subgroup', ref:'Poster · Capelli–Frattini Argument', tag:'Main result',
 formula:tex`$P_X(H)\cdot N_G(H)\subseteq N_G(H)\cdot P_X(H)=P_G(H)$`,
 content:tex`
\begin{lead}
The classical Capelli-Frattini Argument describes the whole group when $H$ is pronormal. 
The same mechanism can be localized: if $H\le X\trianglelefteq G$, it describes precisely the elements of $G$ that pronormalize $H$.
\end{lead}

\textbf{The classical Capelli-Frattini Argument.}

Suppose that \(H\le X\trianglelefteq G\)
and that $H$ is pronormal in $G$. Let $g\in G$. Since $X$ is normal in $G$ and $H\le X$, we have
\(H,H^g\le X.\)

By pronormality, there exists \(u\in\langle H,H^g\rangle\le X\)
such that
\(H^u=H^g.\)
Hence
\(gu^{-1}\in N_G(H),\)
and therefore
\(g=(gu^{-1})u\in N_G(H)X.\)
Since $g$ was arbitrary,
\[
\boxed{G=N_G(H)X.}
\]

The important point is the decomposition
\[
g=(gu^{-1})u,
\qquad
gu^{-1}\in N_G(H),
\qquad
u\in X.
\]

\textbf{What happens if $H$ is not pronormal in the whole group $G$?}

We can no longer decompose every element of $G$ in this way. 
However, the same argument applies to every element that \emph{pronormalizes} $H$.

Let
\(g\in P_G(H).
\)
By definition, there exists
\(u\in\langle H,H^g\rangle\)
such that
\(H^u=H^g.\)
Again, since $X\trianglelefteq G$ and $H\le X$,
\(\langle H,H^g\rangle\le X.\)

Thus $u\in X$. Moreover, $u$ itself pronormalizes $H$ inside $X$, and hence
\(u\in P_X(H).\)
As before,
\(gu^{-1}\in N_G(H).\)
Consequently,
\[
g=(gu^{-1})u\in N_G(H)P_X(H).
\]

Thus every element of $G$ that pronormalizes $H$ can be obtained from a normalizing element and a pronormalizing element already lying in $X$.

\begin{theorem}
Let $G$ be a group, $H$ a subgroup of $G$. If $X\trianglelefteq G$ and $H\le X$, then
\begin{itemize}
\item[(1)] (\textcolor{softgreen}{Set})
\[
\greenbox{P_X(H)\cdot N_G(H)\subseteq N_G(H)\cdot P_X(H)=P_G(H)}.
\]
\item[(2)] (\textcolor{gold}{Subgroup}) If $P_X(H)$ is a subgroup of $G$, then
\[
\yellowbox{P_X(H)\cdot N_G(H)=N_G(H)\cdot P_X(H)=P_G(H)}.
\]
\item[(3)] (\textcolor{red}{Pronormalizer}) If $R$ is the only \textcolor{red}{pronormalizer} of $H$ in $X$, then $R\cdot N_G(H)$ is the only \textcolor{red}{pronormalizer} of $H$ in $G$.
\end{itemize}
\end{theorem}

\textbf{Why is this a genuine generalization?}

If $H$ is pronormal in $G$, then
\(P_G(H)=G.\)
Since pronormality passes to every intermediate subgroup containing $H$, we also have
\(P_X(H)=X.\)
Therefore the generalized formula becomes
\[
G=P_G(H)=N_G(H)P_X(H)=N_G(H)X,
\]
which is exactly the classical Capelli--Frattini Argument.

Hence the passage
\[
\boxed{G=N_G(H)X}
\]
is replaced by the more local identity
\[
\boxed{P_G(H)=N_G(H)P_X(H).}
\]

The two formulas arise from exactly the same decomposition:
\[
\boxed{
g=(gu^{-1})u,
\qquad
gu^{-1}\in N_G(H),
\qquad
u\in P_X(H).
}
\]

\textbf{Three levels of information.}

The theorem can be read as a progression.

\begin{itemize}
    \item \textbf{Pronormalizing elements.}
    Local pronormalizing elements in $X$, together with $N_G(H)$, describe the whole set $P_G(H)$.

    \item \textbf{Subgroup structure.}
    If the local set $P_X(H)$ is already a subgroup, then the product becomes a genuine subgroup factorization:
    \[
    P_G(H)=N_G(H)P_X(H)=P_X(H)N_G(H).
    \]

    \item \textbf{Pronormalizers.}
    If $H$ has a unique pronormalizer $R$ inside $X$, then uniqueness also lifts to $G$, and the unique pronormalizer in $G$ is
    \[
    RN_G(H).
    \]
\end{itemize}

\begin{takeaway}
The Capelli--Frattini mechanism transports information on pronormalizing elements and unique pronormalizers from the normal subgroup $X$ to the ambient group $G$.
\end{takeaway}`,
 next:'theorem-a', bounties:[]
},
{
 id:'theorem-a', number:'08', short:'Theorem A', title:'Pronormality in products', subtitle:'A local property that recombines globally', ref:'Poster · Theorem A', tag:'Main theorem',
 formula:tex`$G=AB,\ H\text{ pronormal in both }A\text{ and }B\Longrightarrow H\text{ pronormal in }G$`,
 content:tex`\begin{lead}
Products of pronormal subgroups and the main product theorem
\end{lead}

\begin{theorem}[B. Fischer--unpublished]
Let $G$ be a finite \textcolor{violet}{soluble} group, and let $H$ and $K$ be \textcolor{blue}{pronormal} subgroups of $G$. If $HK=KH$, then $HK$ is \textcolor{blue}{pronormal} in $G$.
\end{theorem}

One can find this result as Theorem 6.10 in \cite{Doerk}.

Let $G$ be a finite group, and let $H$ and $K$ be subgroups of $G$ such that $HK=KH$. If $H$ and $K$ have only one \textcolor{red}{pronormalizer} in $G$, does $HK$ have only one \textcolor{red}{pronormalizer} in $G$?

\textbf{Example.} There exists a group $G$ of order $2\cdot3^6$ such that:
\begin{itemize}
\item every $2$-subgroup and every $3$-subgroup of $G$ has only one \textcolor{red}{pronormalizer} in $G$;
\item there exists a subgroup of order $6$ that has more than one \textcolor{red}{pronormalizer} in $G$.
\end{itemize}

Let $G$ be a finite group and $H$ a subgroup of $G$. Let $A$ and $B$ be \textcolor{red}{pronormalizers} of $H$ in $G$. If $AB=BA$, does it follow that $A=B$?

\textbf{Equivalently:} let $G=AB$ be a finite group and $H$ a subgroup of $G$. If $H$ is \textcolor{blue}{pronormal} in both $A$ and $B$, is $H$ necessarily \textcolor{blue}{pronormal} in $G$?

\begin{theorem}[Theorem A]
Let $G=AB$ be a finite \textcolor{violet}{soluble} group, and let $H$ be a subgroup of $G$. If $H$ is \textcolor{blue}{pronormal} in both $A$ and $B$, then $H$ is \textcolor{blue}{pronormal} in $G$.
\end{theorem}

\begin{takeaway}
In finite soluble groups, pronormality is compatible with product decompositions, but the solubility boundary is real.
\end{takeaway}`,
next:'theorem-b',
bounties:[{src:'bounties/bernd-fischer.png',name:'Bernd Fischer',note:''}],

},
{
 id:'theorem-b', number:'09', short:'Theorem B', title:'Four is the threshold', subtitle:'Few pronormalizers force solubility', ref:'Poster · Theorem B', tag:'Headline result',
 formula:tex`$\forall X\le G,\ |X|\text{ a power of }2,\ |\mathcal P_G(X)|\le4\Longrightarrow G\text{ soluble}$`,
content: tex`
\begin{theorem}[Theorem B]
Let $G$ be a finite group. If every $2$-subgroup of $G$ has at most
four pronormalizers, then $G$ is soluble.
\end{theorem}

\begin{lead}
Why does the number four appear?

The smallest non-abelian simple group already suggests the answer:
an involution in $A_5$ has exactly five pronormalizers.
\end{lead}

\textbf{The motivating example: $A_5$.}

Let
\(G=A_5\)
and let \(H=\langle (1,2)(3,4)\rangle.\)

Then $H$ has exactly five pronormalizers in $A_5$.

More precisely, the pronormalizers of $H$ are:

\begin{itemize}
\item one subgroup isomorphic to $V_4$;

\item two subgroups isomorphic to $\operatorname{Sym}(3)$;

\item two subgroups isomorphic to $\operatorname{Dih}(10)$.
\end{itemize}

Therefore
\[
|\mathcal P_{A_5}(H)|
=
5.
\]

Thus the smallest non-abelian simple group already suggests that
five is the natural threshold for simple groups.

In particular, the condition
\(|\mathcal P_G(H)|\le 4\)
for every $2$-subgroup $H$ is a natural candidate for forcing solubility.

\begin{remark}
The example $A_5$ also shows why the number four should be expected to be sharp:
allowing five pronormalizers would already allow a non-abelian simple group.
\end{remark}

\textbf{Minimal simple groups.}

A finite simple group $G$ is called \emph{minimal simple} if every proper
subgroup of $G$ is soluble.

Thus a minimal simple group is a minimal obstruction to solubility:
the group itself is not soluble, while all of its proper subgroups are soluble.

The crucial input is Thompson's classification of finite minimal simple groups
\cite{Thomp}.

\begin{theorem}[J. G. Thompson]
Let $G$ be a finite minimal simple group. Then $G$ is isomorphic to one of
the following groups:

\begin{itemize}
\item $\operatorname{PSL}(3,3)$;

\item $\operatorname{PSL}(2,2^p)$, where $p$ is a prime;

\item $\operatorname{Sz}(2^p)$, where $p$ is an odd prime;

\item $\operatorname{PSL}(2,3^p)$, where $p$ is an odd prime;

\item $\operatorname{PSL}(2,p)$, where $p>3$ is a prime and \(5\mid p^2+1.\)
\end{itemize}
\end{theorem}

Thompson's theorem \cite{Thomp} reduces the problem to these explicit
families.

The strategy is therefore clear: for every family in Thompson's list,
one looks for a subgroup $H$ of order $2$ having at least five
pronormalizers.

The example of $A_5$ explains what one should expect.
Indeed,
\(A_5\simeq \operatorname{PSL}(2,4),\)
and an involution subgroup already has exactly five pronormalizers.

The same phenomenon is then established for all the groups occurring
in Thompson's classification.

Consequently, every finite minimal simple group contains a subgroup
$H$ of order $2$ such that
\(|\mathcal P_G(H)|\ge 5.\)

\begin{theorem}
Let $G$ be a finite minimal simple group. Then there exists a subgroup
$H\le G$ of order $2$ such that
\(|\mathcal P_G(H)|\ge 5.\)
\end{theorem}

This is the bridge between Thompson's classification and the
pronormalizer problem.

The classification tells us which groups have to be checked;
the pronormalizer calculations show that none of them can satisfy
the bound four.

\textbf{From simple groups to solubility.}

Suppose now that $G$ is a finite group in which every $2$-subgroup
has at most four pronormalizers.

If a non-abelian simple obstruction occurred, the previous result
would produce a subgroup $H$ of order $2$ satisfying
\(|\mathcal P_G(H)|\ge 5,\)
contrary to the hypothesis.

This leads to the main conclusion.

\begin{takeaway}
The number of pronormalizers is not merely local data: a uniform threshold on $2$-subgroups detects a global property of the group.
\end{takeaway}`,
 next:'origins', bounties:[{src:'bounties/john-thompson.png',name:'John G. Thompson',note:''}]
}
];

const positions=['top-left','top-mid','top-right','centre','low-left','low-mid','low-right','bottom-left','bottom-right'];
const labels={detailBack:'Back to the map',routeLog:'Route log',landing:'Landing',island:'Island',coordinates:'Theoretical coordinates',logbook:'Logbook',recorded:'Landing recorded',mission:'Mission',next:'Next island'};

const theoremEnvironments={
  theorem:{name:'Theorem',numbered:true,kind:'theorem'},
  teo:{name:'Theorem',numbered:true,kind:'theorem'},
  lemma:{name:'Lemma',numbered:true,kind:'theorem'},
  proposition:{name:'Proposition',numbered:true,kind:'theorem'},
  proposizione:{name:'Proposition',numbered:true,kind:'theorem'},
  corollary:{name:'Corollary',numbered:true,kind:'theorem'},
  definition:{name:'Definition',numbered:true,kind:'definition'},
  defn:{name:'Definition',numbered:true,kind:'definition'},
  remark:{name:'Remark',numbered:true,kind:'remark'},
  example:{name:'Example',numbered:true,kind:'remark'},
  proof:{name:'Proof',numbered:false,kind:'proof'},
  lead:{name:'',numbered:false,kind:'lead'},
  takeaway:{name:'',numbered:false,kind:'takeaway'}
};

function escapeAttr(s){
  return String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}

function bibliographyNumber(key){
  const index=bibliographyKeys.indexOf(key);
  return index>=0 ? index+1 : null;
}

function bibliographyId(item,key){
  return `bib-${item.id}-${String(key).replace(/[^A-Za-z0-9_-]+/g,'-')}`;
}

function renderCitation(keys,ctx){
  return keys.split(',').map(rawKey=>{
    const key=rawKey.trim();
    if(!key) return '';
    if(ctx) ctx.citations.add(key);
    const entry=bibliography[key];
    const number=bibliographyNumber(key);
    if(entry && number && ctx){
      return `<a class="citation latex-citation" href="#${escapeAttr(bibliographyId(ctx.item,key))}" title="${escapeAttr(entry.author || key)}">[${number}]</a>`;
    }
    if(entry && number) return `<span class="citation">[${number}]</span>`;
    return `<span class="citation latex-citation-unresolved" title="Add '${escapeAttr(key)}' to the bibliography database">[${escapeAttr(key)}]</span>`;
  }).join('');
}

function formatBibliographyEntry(entry){
  const parts=[];
  if(entry.author) parts.push(`<span class="bib-author">${entry.author}</span>`);
  if(entry.title) parts.push(`<em>${entry.title}</em>`);
  let venue='';
  if(entry.journal) venue+=entry.journal;
  if(entry.volume) venue+=(venue?', ':'')+entry.volume;
  if(entry.number) venue+=`(${entry.number})`;
  if(entry.pages) venue+=(venue?', ':'')+entry.pages;
  if(venue) parts.push(venue);
  if(entry.year) parts.push(entry.year);
  if(entry.doi){
    const doi=String(entry.doi).replace(/^https?:\/\/doi\.org\//,'');
    parts.push(`<a class="latex-link" href="https://doi.org/${escapeAttr(doi)}" target="_blank" rel="noopener">doi:${escapeAttr(doi)}</a>`);
  }else if(entry.url){
    parts.push(`<a class="latex-link" href="${escapeAttr(entry.url)}" target="_blank" rel="noopener">link</a>`);
  }
  return parts.join('. ')+'.';
}

function renderBibliography(ctx){
  const keys=[...ctx.citations]
    .filter(key=>bibliography[key])
    .sort((a,b)=>bibliographyNumber(a)-bibliographyNumber(b));
  if(!keys.length) return '';
  const items=keys.map(key=>{
    const number=bibliographyNumber(key);
    return `<li id="${escapeAttr(bibliographyId(ctx.item,key))}" value="${number}">${formatBibliographyEntry(bibliography[key])}</li>`;
  }).join('');
  return `<section class="latex-bibliography" aria-label="References"><h3>References</h3><ol>${items}</ol></section>`;
}

const tikzPreamble=String.raw`\definecolor{softgreen}{RGB}{49,92,70}
\definecolor{gold}{RGB}{154,106,29}
\definecolor{orange}{RGB}{201,126,44}
\definecolor{violet}{RGB}{113,80,125}`;

function escapeTikzScript(source){
  return String(source).replace(/<\/script/gi,'<\\/script');
}

function renderTikzEnvironments(source,ctx){
  return source.replace(/\\begin\{tikzpicture\}(?:\[([^\]]*)\])?([\s\S]*?)\\end\{tikzpicture\}/g,(whole,options,body)=>{
    const begin=`\\begin{tikzpicture}${options!=null?`[${options}]`:''}`;
    const tikz=`${begin}${body}\\end{tikzpicture}`;
    const preamble=escapeAttr(tikzPreamble);
    const html=`<figure class="latex-tikz mathjax_ignore"><script type="text/tikz" data-add-to-preamble="${preamble}" data-width="900">${escapeTikzScript(tikz)}</script></figure>`;
    return stashBlock(ctx,html);
  });
}

const latexNamedColors={
  softgreen:{css:'softgreen',rgb:'0.192,0.361,0.275'},
  gold:{css:'gold',rgb:'0.604,0.416,0.114'},
  orange:{css:'orange',rgb:'0.788,0.494,0.173'},
  violet:{css:'violet',rgb:'0.443,0.314,0.490'}
};

function normalizeMathLatex(value){
  let source=String(value == null ? '' : value);
  for(const [name,meta] of Object.entries(latexNamedColors)){
    const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    source=source
      .replace(new RegExp('\\\\textcolor\\{'+escaped+'\\}', 'g'), `\\textcolor[rgb]{${meta.rgb}}`)
      .replace(new RegExp('\\\\color\\{'+escaped+'\\}', 'g'), `\\color[rgb]{${meta.rgb}}`);
  }
  return source;
}

function normalizeLatexText(value,ctx){
  let source=String(value == null ? '' : value);
  const math=[];
  source=source.replace(/(\$\$[\s\S]*?\$\$|\$[^$]*\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g,m=>`@@MATH${math.push(normalizeMathLatex(m))-1}@@`);

  // LaTeX switch-style groups used in the original slides.
  source=source
    .replace(/\{\\bfseries\s*\\color\{([^{}]+)\}\s*([\s\S]*?)\}/g,(_,c,t)=>`<strong><span class="latex-color latex-color-${escapeAttr(c)}">${t}</span></strong>`)
    .replace(/\{\\itshape\s*\\color\{([^{}]+)\}\s*([\s\S]*?)\}/g,(_,c,t)=>`<em><span class="latex-color latex-color-${escapeAttr(c)}">${t}</span></em>`)
    .replace(/\{\\color\{([^{}]+)\}\s*([\s\S]*?)\}/g,(_,c,t)=>`<span class="latex-color latex-color-${escapeAttr(c)}">${t}</span>`)
    .replace(/\{\\bfseries\s+([\s\S]*?)\}/g,'<strong>$1</strong>')
    .replace(/\{\\itshape\s+([\s\S]*?)\}/g,'<em>$1</em>');

  // Resolve inner color commands before text-style commands so constructs such as
  // \textit{\textcolor{violet}{serial}} are handled correctly.
  let previous;
  do{
    previous=source;
    source=source
      .replace(/\\textcolor\{([^{}]+)\}\{([^{}]*)\}/g,(_,c,t)=>`<span class="latex-color latex-color-${escapeAttr(c)}">${t}</span>`)
      .replace(/\\(?:softgreen)\{([^{}]*)\}/g,'<span class="latex-color latex-color-softgreen">$1</span>')
      .replace(/\\(?:gold)\{([^{}]*)\}/g,'<span class="latex-color latex-color-gold">$1</span>')
      .replace(/\\emph\{([^{}]*)\}/g,'<em>$1</em>')
      .replace(/\\textit\{([^{}]*)\}/g,'<em>$1</em>')
      .replace(/\\textbf\{([^{}]*)\}/g,'<strong>$1</strong>')
      .replace(/\\texttt\{([^{}]*)\}/g,'<code>$1</code>')
      .replace(/\{\\it\s+([^{}]*)\}/g,'<em>$1</em>')
      .replace(/\{\\bf\s+([^{}]*)\}/g,'<strong>$1</strong>')
      .replace(/\\hbox\{([^{}]*)\}/g,'$1')
      .replace(/\\greenbox\{([^{}]*)\}/g,'<span class="latex-box latex-box-green">$1</span>')
      .replace(/\\redbox\{([^{}]*)\}/g,'<span class="latex-box latex-box-red">$1</span>')
      .replace(/\\yellowbox\{([^{}]*)\}/g,'<span class="latex-box latex-box-yellow">$1</span>');
  }while(source!==previous);

  source=source
    .replace(/\\cite(?:\[[^\]]*\])?\{([^{}]*)\}/g,(_,keys)=>renderCitation(keys,ctx))
    .replace(/\\href\{([^{}]+)\}\{([^{}]+)\}/g,(_,url,text)=>`<a class="latex-link" href="${escapeAttr(url)}">${text}</a>`)
    .replace(/\\url\{([^{}]+)\}/g,(_,url)=>`<a class="latex-link" href="${escapeAttr(url)}">${url}</a>`)
    .replace(/\\noindent\b/g,'')
    .replace(/\\(?:smallskip|medskip|bigskip)\b/g,' ')
    .replace(/\\-/g,'')
    .replace(/~/g,'&nbsp;')
    .replace(/\\quad\b/g,'&emsp;')
    .replace(/\\qquad\b/g,'&emsp;&emsp;')
    .replace(/\\,/g,' ')
    .replace(/\\\\/g,'<br>');
  source=source.replace(/@@MATH(\d+)@@/g,(_,i)=>math[Number(i)] || '');
  return source;
}

function latexContext(item){
  return {item,counter:0,refs:Object.create(null),blocks:[],citations:new Set()};
}

function stashBlock(ctx,html){
  const key=`@@LATEXBLOCK${ctx.blocks.length}@@`;
  ctx.blocks.push(html);
  return `\n\n${key}\n\n`;
}

function cleanPresentationLatex(source){
  return String(source)
    .replace(/^[ \t]*%.*$/gm,'')
    .replace(/\\pause\b/g,'')
    .replace(/\\begin\{columns\}/g,'')
    .replace(/\\end\{columns\}/g,'')
    .replace(/\\begin\{column\}\{[^{}]*\}/g,'')
    .replace(/\\end\{column\}/g,'')
    .replace(/\\centering\b/g,'');
}

function renderLists(source,ctx){
  let out=source;
  const listPattern=/\\begin\{(itemize|enumerate)\}([\s\S]*?)\\end\{\1\}/g;
  let previous;
  do{
    previous=out;
    out=out.replace(listPattern,(_,kind,body)=>{
      const matches=[...body.matchAll(/\\item(?:<[^>]*>)?(?:\[([^\]]*)\])?\s*/g)];
      const tag=kind==='enumerate'?'ol':'ul';
      const items=matches.map((m,i)=>{
        const start=m.index+m[0].length;
        const end=i+1<matches.length?matches[i+1].index:body.length;
        const label=m[1]?`<span class="latex-item-label">${normalizeLatexText(m[1],ctx)}</span> `:'';
        return `<li>${label}${renderLatexFlow(body.slice(start,end),ctx)}</li>`;
      }).join('');
      return stashBlock(ctx,`<${tag} class="latex-list">${items}</${tag}>`);
    });
  }while(out!==previous);
  return out;
}

function renderTheoremEnvironments(source,ctx){
  const names=Object.keys(theoremEnvironments).join('|');
  const re=new RegExp('\\\\begin\\{('+names+')\\}(?:\\[([^\\]]*)\\])?([\\s\\S]*?)\\\\end\\{\\1\\}','g');
  return source.replace(re,(_,env,optTitle,body)=>{
    const meta=theoremEnvironments[env];
    let number='';
    if(meta.numbered){
      ctx.counter+=1;
      number=`${Number(ctx.item.number)}.${ctx.counter}`;
    }
    const labelMatch=body.match(/\\label\{([^{}]+)\}/);
    let id='';
    if(labelMatch){
      const key=labelMatch[1];
      id=`latex-${ctx.item.id}-${key.replace(/[^A-Za-z0-9_-]+/g,'-')}`;
      ctx.refs[key]={number,name:meta.name,id};
      body=body.replace(/\\label\{[^{}]+\}/g,'');
    }
    const inner=renderLatexFlow(body,ctx);
    if(meta.kind==='lead') return stashBlock(ctx,`<div class="latex-lead">${inner}</div>`);
    if(meta.kind==='takeaway') return stashBlock(ctx,`<div class="latex-takeaway">${inner}</div>`);
    const titleBits=[];
    if(meta.name) titleBits.push(meta.name);
    if(number) titleBits.push(number);
    if(optTitle) titleBits.push(`(${normalizeLatexText(optTitle,ctx)})`);
    const head=titleBits.length?`<div class="latex-env-title">${titleBits.join(' ')}</div>`:'';
    const qed=meta.kind==='proof'?'<span class="latex-qed" aria-hidden="true">□</span>':'';
    return stashBlock(ctx,`<section${id?` id="${escapeAttr(id)}"`:''} class="latex-env latex-${meta.kind}">${head}<div class="latex-env-body">${inner}${qed}</div></section>`);
  });
}

function renderSimpleEnvironments(source,ctx){
  let out=source;
  out=out.replace(/\\begin\{center\}([\s\S]*?)\\end\{center\}/g,(_,body)=>stashBlock(ctx,`<div class="latex-center">${renderLatexFlow(body,ctx)}</div>`));
  out=out.replace(/\\(?:sub)*section\*?\{([^{}]+)\}/g,(_,title)=>stashBlock(ctx,`<h3 class="latex-heading">${normalizeLatexText(title)}</h3>`));
  return out;
}

function resolveLatexRefs(html,ctx){
  return html
    .replace(/\\autoref\{([^{}]+)\}/g,(_,key)=>{
      const ref=ctx.refs[key];
      return ref?`<a class="latex-ref" href="#${escapeAttr(ref.id)}">${ref.name} ${ref.number}</a>`:`<span class="latex-unresolved">??</span>`;
    })
    .replace(/\\ref\{([^{}]+)\}/g,(_,key)=>{
      const ref=ctx.refs[key];
      return ref?`<a class="latex-ref" href="#${escapeAttr(ref.id)}">${ref.number}</a>`:`\\(\\ref{${key}}\\)`;
    })
    .replace(/\\eqref\{([^{}]+)\}/g,(_,key)=>`\\(\\eqref{${key}}\\)`);
}

function expandBlocks(html,ctx){
  let out=html;
  let guard=0;
  while(/@@LATEXBLOCK\d+@@/.test(out) && guard<50){
    out=out.replace(/@@LATEXBLOCK(\d+)@@/g,(_,i)=>ctx.blocks[Number(i)] || '');
    guard+=1;
  }
  return out;
}

function renderLatexFlow(source,ctx){
  let text=cleanPresentationLatex(source == null ? '' : source).replace(/\r\n?/g,'\n');
  text=renderTikzEnvironments(text,ctx);
  text=renderTheoremEnvironments(text,ctx);
  text=renderLists(text,ctx);
  text=renderSimpleEnvironments(text,ctx);

  const chunks=text.split(/\n\s*\n+/).map(x=>x.trim()).filter(Boolean);
  const html=chunks.map(chunk=>{
    const exact=chunk.match(/^@@LATEXBLOCK(\d+)@@$/);
    if(exact) return exact[0];
    const flattened=chunk.replace(/\n+/g,' ');
    return `<p>${normalizeLatexText(flattened,ctx)}</p>`;
  }).join('');
  return html;
}

function renderLatexDocument(source,item){
  const ctx=latexContext(item);
  let html=renderLatexFlow(source,ctx);
  html=expandBlocks(html,ctx);
  html=resolveLatexRefs(html,ctx);
  html+=renderBibliography(ctx);
  return html;
}

function typesetMath(){
  if(window.MathJax && typeof window.MathJax.typesetPromise==='function'){
    const root=document.getElementById('app');
    if(window.MathJax.typesetClear) window.MathJax.typesetClear([root]);
    window.MathJax.typesetPromise([root]).catch(console.error);
  }
}


function renderBounties(item){
  if(!item.bounties || !item.bounties.length) return '';
  return `<section class="bounty-strip" aria-label="Associated bounties"><div class="bounty-heading"><span>Associated bounties</span><strong>Wanted posters linked to this island</strong></div>${item.bounties.map(b=>`<article class="bounty-card"><img src="${escapeAttr(b.src)}" alt="Wanted poster of ${escapeAttr(b.name)}"><div class="bounty-meta"><span>Wanted poster</span><strong>${b.name}</strong><small>${b.note||''}</small></div></article>`).join('')}</section>`;
}
function renderFigureHtml(item){
  return item.figureHtml?`<div class="detail-inline-blocks">${item.figureHtml}</div>`:'';
}

const app=document.getElementById('app');
function islandLink(item,i){return `<a class="island-card ${positions[i]}" href="#island/${item.id}" aria-label="${escapeAttr(item.number+'. '+item.title)}"><span class="island-index">${item.number}</span><span class="island-tag">${item.tag}</span><strong>${item.title}</strong><small>${item.subtitle}</small><span class="island-arrow" aria-hidden="true">↗</span></a>`}
function renderHome(){app.innerHTML=`<section class="poster-home" aria-labelledby="poster-title"><div class="poster-stage-wrap"><div class="poster-stage"><svg class="route-svg" viewBox="0 0 100 140" aria-hidden="true"><path d="M17 23 C31 12,44 17,52 24 S77 22,85 31 C68 38,54 37,49 53 S28 67,18 83 C33 91,48 88,55 98 S70 106,82 103 C72 117,56 119,45 124"/><circle cx="18" cy="23" r="1.6"/><circle cx="52" cy="24" r="1.6"/><circle cx="85" cy="31" r="1.6"/><circle cx="50" cy="53" r="1.6"/><circle cx="18" cy="83" r="1.6"/><circle cx="55" cy="98" r="1.6"/><circle cx="82" cy="103" r="1.6"/><circle cx="30" cy="119" r="1.6"/><circle cx="68" cy="121" r="1.6"/></svg><div class="compass" aria-hidden="true"><span>N</span><b>𝒫</b></div>${islands.map(islandLink).join('')}<div class="poster-scroll"><span>THE VOYAGE</span><strong id="poster-title">Nine islands for navigating the theory of pronormalizers.</strong><small>Brescia · Ingrosso · Trombetti</small></div></div><p class="poster-hint">↟ Select an island to open the detailed view</p></div></section>`;typesetMath()}
function renderDetail(item){const next=islands.find(x=>x.id===item.next)||islands[0];app.innerHTML=`<article class="detail-page"><header class="detail-hero"><div class="detail-top"><a class="detail-back" href="#home"><span aria-hidden="true">←</span> ${labels.detailBack}</a><div class="arrival"><span>${labels.routeLog}</span><strong>${labels.landing} ${item.number}</strong><small>${labels.island} ${item.number} · ${item.short}</small></div></div><div class="detail-heading"><div class="detail-number">${item.number}</div><div><span class="detail-tag">${labels.island} ${item.number} · ${item.short} · ${item.ref}</span><h1>${item.title}</h1><p>${item.subtitle}</p></div></div><div class="formula-wrap"><span>${labels.coordinates}</span><div class="formula" aria-label="Main formula">${normalizeLatexText(item.formula)}</div></div></header><section class="landing-log" aria-label="Landing log"><div class="log-title"><span>${labels.logbook}</span><strong>${labels.recorded}</strong></div><div><span>${labels.island}</span><strong>${item.number} · ${item.short}</strong></div><div><span>${labels.mission}</span><strong>${item.tag}</strong></div></section>${renderBounties(item)}<div class="detail-content"><div class="detail-article"><div class="latex-flow">${renderLatexDocument(item.content,item)}${renderFigureHtml(item)}</div></div></div><footer class="detail-next"><span>${labels.next} · ${next.number}</span><a href="#island/${next.id}">${next.title}<i aria-hidden="true">→</i></a></footer></article>`;window.scrollTo({top:0,behavior:'instant'});typesetMath()}
function route(){const m=location.hash.match(/^#island\/([^/]+)$/);if(m){const item=islands.find(x=>x.id===m[1]);if(item){renderDetail(item);return}}renderHome()}
window.addEventListener('hashchange',route);route();
window.addEventListener('load',typesetMath);
