<?php

declare(strict_types=1);

namespace Omikron\FactFinder\Shopware6\Storefront\Controller;

use Omikron\FactFinder\Shopware6\Config\Communication;
use Omikron\FactFinder\Shopware6\Utilites\Ssr\Exception\DetectRedirectCampaignException;
use Omikron\FactFinder\Shopware6\Utilites\Ssr\SearchAdapter;
use Omikron\FactFinder\Shopware6\Utilites\Ssr\Template\Engine;
use Omikron\FactFinder\Shopware6\Utilites\Ssr\Template\RecordList;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Shopware\Storefront\Page\GenericPageLoader;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class ResultController extends StorefrontController
{
    public function __construct(
        private readonly Communication $config,
        private readonly GenericPageLoader $pageLoader
    ) {
    }

    /**
     * @SuppressWarnings(PHPMD.Superglobals)
     */
    #[Route('/factfinder/result', name: 'frontend.factfinder.result', methods: ['GET'])]
    public function result(
        Request $request,
        SalesChannelContext $context,
        SearchAdapter $searchAdapter,
        Engine $mustache
    ): Response {
        $page     = $this->pageLoader->load($request, $context);
        $response = $this->renderStorefront('@Parent/storefront/page/factfinder/result.html.twig', ['page' => $page]);

        if ($this->config->isSsrActive() === false) {
            return $response;
        }

        $recordList = new RecordList(
            $request,
            $mustache,
            $searchAdapter,
            $context->getSalesChannelId(),
            $response->getContent(),
        );

        try {
            $response->setContent(
                $recordList->getContent(
                    $this->parseQueryString((string) parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_QUERY))
                )
            );
        } catch (DetectRedirectCampaignException $exception) {
            return new RedirectResponse($exception->getRedirectUrl());
        }

        return $response;
    }

    private function parseQueryString(string $queryString): string
    {
        if ($queryString === '') {
            return '';
        }

        $queryParams = explode('&', $queryString);
        $result      = array_reduce(
            $queryParams,
            function (string $carry, string $queryParam) {
                $result = explode('=', $queryParam);

                return sprintf('%s&%s=%s', $carry, $result[0], htmlspecialchars($result[1]));
            },
            ''
        );

        return substr($result, 1);
    }
}
