<!DOCTYPE colores[

<!ELEMENT colores (color+)>
<!ELEMENT color ((nombreSvg, valor, codigo) | (valor, nombreSvg, codigo))>
<!ELEMENT nombreSvg (#PCDATA)>
<!ELEMENT valor (#PCDATA)>
<!ELEMENT codigo ((rgb) | (cmyk))>
<!ELEMENT rgb (#PCDATA)>
<!ELEMENT cmyk (#PCDATA)>

]>
