# Regular.js
## INTRODUCTION
### ENGLISH

This framework helps you to minify your html code. With, you will be able to separate your html code from this data. In the example of a table, the parts that never change between each line are the tr and the td, they are for each line always present.
In short, with this framework, portions of your code will split in two: View (HTML) and data (html, text, titles ...).

### FRANCAIS

Ce framework vous aide à minifier votre code html. Avec, vous pourrait séparer votre code html de ses données. Dans l'exemple d'un tableau, les parties qui ne changent jamais entre chaque ligne, sont les tr et les td, ils sont pour chaque ligne toujours présent.
Bref, avec ce framework, des portions de votre code se sépareront en deux : La vue (le HTML) et les données (du html, du texte, des titres... etc).

## EXAMPLE / EXEMPLE

### THE / LES VARIABLES
#### This first example show how to make and display one variable (Name of vars in this example : The title & The second_title)

    <div class="regular" data-make="(The title=My best var;The second_title=My second title)">
      <h1>{%The title%}</h1>
      <h2>{%The second_title%}</h2>
      <p>I want to repeat me, the title is : {%The title_%}</p>
    </div>

After the parsing :

    <div class="regular" data-make="(The title=My best var;The second_title=My second title)">
      <h1>My best var</h1>
      <h2>My second title</h2>
      <p>I want to repeat me, the title is : My best var</p>
    </div>

**The variables must not possess these signs** : Not a parenthesis, not an equal sign (=) and not a quote or change `data-make="(Name of the_vars=My best var)"` to `data-make='(Name of the_vars=My best var)'` for example.

**Les variables ne doivent pas posséder ces signes** : pas de paranthèse, pas de signe égale(=) et pas de " ous sinon, il faut changer `data-make="(Name of the_vars=My best var)"` par `data-make='(Name of the_vars=My best var)'`

#### This second example show how to make a loop :

    <tr class="regular danger" data-make="(td class=lemon;title=Limonade)(td class=is;title=Diabolo)(td class=a fruit;title=Morito)"
      <td class="{%td class%}">{%title%}</td>
    </tr>

After this parsing :

    <tr class="regular danger" data-make="(td class=lemon;title=Limonade)(td class=is;title=Diabolo)(td class=a fruit;title=Morito)">
      <td class="lemon">Limonade</td>
    </tr>
    <tr class="regular danger" data-make="(td class=lemon;title=Limonade)(td class=is;title=Diabolo)(td class=a fruit;title=Morito)">
      <td class="is">Diabolo</td>
    </tr>
    <tr class="regular danger" data-make="(td class=lemon;title=Limonade)(td class=is;title=Diabolo)(td class=a fruit;title=Morito)">
      <td class="a fruit">Morito</td>
    </tr>

*Note :* class and data-make has copied. You can easily modify this behavior.

## Give comment

You can give a comment in [openclassrooms](https://openclassrooms.com/forum/sujet/regular-js-minifie-votre-code-html/91770237) or in [primfx.com](https://www.primfx.com/forum/discussions/projet-recrutement/regular-minifier-votre-code-html-1054/page-1)

## LICENSE

This framework is distributed under MIT license.

© Coucougael94 2017
