function generarCodigoHTML() {
    const container = document.getElementById('c-flex-item');

    const parentDiv = document.createElement('div');
    parentDiv.classList.add('parent');

    const div1_1 = document.createElement('div');
    div1_1.classList.add('div1_1');

    const image = document.createElement('img');
    image.setAttribute('src', '../img/house.jpg');
    div1_1.appendChild(image);

    const div2_1 = document.createElement('div');
    div2_1.classList.add('div2_1');

    const section = document.createElement('section');
    section.classList.add('FlexContainer');

    const divTitle = document.createElement('div');
    divTitle.textContent = 'Casa Padro';
    section.appendChild(divTitle);

    const divLocation = document.createElement('div');
    divLocation.classList.add('nmcs');
    divLocation.textContent = 'Av Panamericana, Quito';
    section.appendChild(divLocation);

    const divFeatures = document.createElement('div');
    divFeatures.classList.add('dfeatures');

    const divFeature1 = document.createElement('div');
    divFeature1.classList.add('df1');
    divFeature1.textContent = '2 baños';
    divFeatures.appendChild(divFeature1);

    const divFeature2 = document.createElement('div');
    divFeature2.classList.add('df2');
    divFeature2.textContent = '4 Camas';
    divFeatures.appendChild(divFeature2);

    const divSize = document.createElement('div');
    divSize.textContent = '200 Metros';
    divFeatures.appendChild(divSize);

    section.appendChild(divFeatures);

    const divPrice = document.createElement('div');
    divPrice.textContent = '$375,232';
    section.appendChild(divPrice);

    div2_1.appendChild(section);
    parentDiv.appendChild(div1_1);
    parentDiv.appendChild(div2_1);

    container.appendChild(parentDiv);
}

generarCodigoHTML();