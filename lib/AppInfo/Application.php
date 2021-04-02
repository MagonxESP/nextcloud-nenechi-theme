<?php


namespace OCA\NenechiTheme\AppInfo;


use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\IConfig;
use OCP\IUserSession;
use OCP\Util;
use OCP\IURLGenerator;

class Application extends App implements IBootstrap {

    /** @var string */
    public const APP_NAME = 'nenechitheme';

    /** @var string */
    protected $appName;

    public function __construct() {
        parent::__construct(self::APP_NAME);
        $this->appName  = self::APP_NAME;
    }

    public function register(IRegistrationContext $context): void {

    }

    public function boot(IBootContext $context): void {
        $context->injectFn([$this, 'doTheming']);
    }

    /**
     * Check if the theme should be applied
     *
     * @param IConfig $config
     * @param IUserSession $userSession
     * @param IURLGenerator $urlGenerator
     */
    public function doTheming(IConfig $config, IUserSession $userSession, IURLGenerator $urlGenerator): void {
        Util::addStyle($this->appName, 'style');
        Util::addScript($this->appName, 'bundle');
    }
}