
const codes = [
    '123456',
    'C0d1g0_#Ex@mPl0',
    'S3nh@_D3_S3gUR@',
    'Pr0j3t0_$12345',
    'K3n1t3-L0ck!',
    'XyZ!_c0d3_abc',
    'QwertY_2023!',
    'L1nh@_D0_C0d1g0',
    'P@$$c0d3#XYZ',
    'H3ll0_W0rLd!',
    'C0d3_&S3gUR@',
    '12345_Abc!',
    'M@st3r_C0d3_77',
    'D3s3nv0lv1m3nto!',
    'L0g1n_P@ssW0rD',
    'K3y2Succ3$$',
    'F0rmUl@_1_D3_C0d3',
    'B@nk1ng_P@ss',
    'T3st3_123!',
    'W3bD3s1gn!',
    'S1mpl3C0d3#'
  ];

  let isGenerating = false;

  function generateCode() {
    if (!isGenerating) {
      isGenerating = true;

      const generatedCode = document.getElementById('generatedCode');
      generatedCode.value = '';

      const randomCode = codes[Math.floor(Math.random() * codes.length)];
      let index = 0;

      const intervalId = setInterval(function () {
        generatedCode.value += randomCode[index];
        index++;

        if (index === randomCode.length) {
          clearInterval(intervalId);
          isGenerating = false;
          document.getElementById('generateButton').disabled = true;
        }
      }, 100);
    }
  }

  function copyCode() {
    const generatedCode = document.getElementById('generatedCode');
    generatedCode.select();
    document.execCommand('copy');
    alert('Código copiado para a área de transferência');
  }

  function goToPage() {
    // Substitua 'sua_pagina.html' pelo nome do arquivo da página para onde deseja redirecionar
    window.location.href = 'https://plurallatvkelve.netlify.app';
  }
